import { useCallback, useEffect, useState } from 'react';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export type AllocationStatus = 'unconfigured' | 'loading' | 'live' | 'full' | 'error';

export interface LaunchAllocationState {
  status: AllocationStatus;
  totalSlots: 20;
  claimedSlots: number | null;
  remainingSlots: number | null;
  firstFiveLimit: 5;
  firstFiveClaimed: number | null;
  errorMessage: string | null;
  refresh: () => void;
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim() || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() || '';

let sharedSupabaseClient: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  if (!sharedSupabaseClient) {
    sharedSupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });
  }
  return sharedSupabaseClient;
}

interface LaunchAllocationRow {
  total_slots: number;
  claimed_slots: number;
  remaining_slots: number;
  first_five_limit: number;
  first_five_claimed: number;
}

export function useLaunchAllocation(): LaunchAllocationState {
  const client = getSupabaseClient();

  const [status, setStatus] = useState<AllocationStatus>(() =>
    client ? 'loading' : 'unconfigured'
  );
  const [claimedSlots, setClaimedSlots] = useState<number | null>(null);
  const [remainingSlots, setRemainingSlots] = useState<number | null>(null);
  const [firstFiveClaimed, setFirstFiveClaimed] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const applyRow = useCallback((row: LaunchAllocationRow) => {
    const claimed = Math.min(20, Math.max(0, Number(row.claimed_slots)));
    const remaining = Math.min(20, Math.max(0, 20 - claimed));
    const firstFive = Math.min(5, Math.max(0, Number(row.first_five_claimed ?? 0)));

    setClaimedSlots(claimed);
    setRemainingSlots(remaining);
    setFirstFiveClaimed(firstFive);
    setErrorMessage(null);
    setStatus(remaining === 0 ? 'full' : 'live');
  }, []);

  const fetchAuthoritativeAllocation = useCallback(async () => {
    const sb = getSupabaseClient();
    if (!sb) {
      setStatus('unconfigured');
      return;
    }

    setStatus((prev) => (prev === 'live' || prev === 'full' ? prev : 'loading'));
    setErrorMessage(null);

    const { data, error } = await sb
      .from('launch_allocation')
      .select('total_slots, claimed_slots, remaining_slots, first_five_limit, first_five_claimed')
      .eq('id', 'gold_titan_launch_v1')
      .single();

    if (error || !data) {
      setStatus('error');
      setErrorMessage('Unable to retrieve live slot availability from server.');
      return;
    }

    applyRow(data as LaunchAllocationRow);
  }, [applyRow]);

  useEffect(() => {
    const sb = getSupabaseClient();
    if (!sb) {
      setStatus('unconfigured');
      return;
    }

    void fetchAuthoritativeAllocation();

    const channel = sb
      .channel('gold-titan-launch-allocation')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'launch_allocation',
          filter: 'id=eq.gold_titan_launch_v1',
        },
        (payload) => {
          if (payload.new) {
            applyRow(payload.new as LaunchAllocationRow);
          }
        }
      )
      .subscribe();

    return () => {
      void sb.removeChannel(channel);
    };
  }, [applyRow, fetchAuthoritativeAllocation]);

  return {
    status,
    totalSlots: 20,
    claimedSlots,
    remainingSlots,
    firstFiveLimit: 5,
    firstFiveClaimed,
    errorMessage,
    refresh: () => {
      void fetchAuthoritativeAllocation();
    },
  };
}
