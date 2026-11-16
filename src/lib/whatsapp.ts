/**
 * Site-wide CTA destination: every call-to-action on the site opens this
 * WhatsApp conversation with a pre-filled message.
 */
export const WHATSAPP_LINK = 'https://wa.me/message/HKQ4F6SRBNFNE1';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hi! Favour, I want to get access to the GOLD TITAN bot trader';

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_URL = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE);

/** Bonus 02 multi-month selects carry the chosen month count in the message. */
export function buildWhatsAppMonthsUrl(termMonths: number): string {
  return buildWhatsAppUrl(
    `Hi! Favour, I want to get access to the GOLD TITAN bot trader and I would like to pay for ${termMonths} months`
  );
}

/** Shared opener for button-based CTAs (new tab, popups-safe). */
export function openWhatsApp(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}
