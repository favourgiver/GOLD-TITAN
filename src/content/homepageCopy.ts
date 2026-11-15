/**
 * LOCKED AUTHORITATIVE HOMEPAGE CONTENT
 * Source of truth: Gold_Titan_Updated_Homepage_Copy.pdf (Sections 1–8, Final CTA, Risk Disclosure).
 * DO NOT rewrite, paraphrase, summarize, shorten, reorder, or alter any string in this file.
 */

export const HOMEPAGE_COPY = {
  brand: 'GOLD TITAN',

  // User-directed override: Christmas promotion wording
  announcementBar:
    'LIMITED CHRISTMAS DISCOUNT - First 5 subscribers get 30% OFF their first month!',

  nav: {
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQs', href: '#faqs' },
    ],
    // User-directed override CTA
    cta: 'GET ACCESS',
  },

  section1Hero: {
    // User-directed override: alternating hero slides (shown beside the hero visuals)
    slides: [
      {
        headline: 'Enjoy your 20%/30% discount.',
        accent: 'discount',
        tagline:
          'You could enjoy 30% discount if you are one of the first 5 subscribers in December & 20% discount if you pay for more than a month at once.',
      },
      {
        headline: 'A Bot that trades for you.',
        accent: 'trades',
        tagline: "Let Titan analyze and trade automatically for you, even when you don't know how.",
      },
    ],
    // User-directed override CTA ('DISCOVER HOW IT WORKS' secondary button removed)
    primaryCta: 'GET ACCESS',
    highlightsHeading: 'KEY PRODUCT HIGHLIGHTS',
    highlights: [
      'Specialised in XAUUSD (Gold).',
      'Compatible with MT4 and MT5.',
      'Automated trading software.',
      'No separate VPS purchase required.',
      'Monthly subscription: $50.',
    ],
    audienceHeading: 'AUDIENCE POSITIONING',
    audienceBody:
      'Built with the next generation of Forex traders in mind, particularly beginners and intermediate traders aged 21-35 who want to explore a smarter, more convenient approach to gold trading.',
  },

  section2Problem: {
    overline: 'The problem',
    heading: "Your Life Shouldn't Revolve Around Watching Forex Charts.",
    intro:
      'Gold trading can demand a lot of your time and attention. Between monitoring price movements, analysing charts and waiting for trading opportunities, it can become difficult to balance trading with everything else happening in your life.',
    // User-directed override: pain points as a plain X-marked left-side list
    painPoints: [
      'Constantly Monitoring Charts',
      'Limited Time As You Have Other Things To Do',
      'You Make Emotional Trading Decisions',
      'Missing Trading Opportunities',
    ],
    closing:
      'Gold Titan analyses the gold market, finds the best entry, take profit and stop loss & takes the trade without emotions while managing risks.',
  },

  section3Solution: {
    overline: 'Introducing the solution',
    heading: 'Meet GOLD TITAN. Your Automated Gold-Trading Companion.',
    paragraphs: [
      // User-directed override wording
      'GOLD TITAN is an automated trading AI solution developed for the XAUUSD market.',
      'Designed to work with MetaTrader 4, GOLD TITAN helps automate its programmed trading strategy, reducing the need for constant manual trade execution.',
      "Whether you're already a pro, or balancing a career, running a business or learning the Forex market, GOLD TITAN gives you access to automated trading technology designed specifically for the XAUUSD market.",
    ],
    appealingHeading: 'WHAT MAKES GOLD TITAN APPEALING?',
    appealingItems: [
      {
        lead: 'Gold-focused automation:',
        detail: 'A dedicated solution for the XAUUSD market.',
      },
      {
        lead: 'Automated execution:',
        detail: 'The software follows its programmed trading rules.',
      },
      {
        lead: 'Flexible subscription:',
        detail: 'Access the software through a straightforward monthly subscription.',
      },
      {
        lead: 'Spend Less Time Watching Charts:',
        detail:
          'Reduce the amount of time you spend monitoring the market and manually executing trades.',
      },
    ],
    // User-directed override CTA
    cta: 'GET ACCESS',
    subCtaNote: 'Your time matters. Explore a more automated approach to gold trading.',
  },

  section4HowItWorks: {
    overline: 'How it works',
    heading: 'Getting Started with GOLD TITAN Is Simple.',
    intro:
      "Getting started doesn't have to be complicated. Follow the setup process and let the software handle its programmed trading activities.",
    steps: [
      {
        title: 'STEP 1 - Choose Your Trading Platform',
        body: 'Select the compatible GOLD TITAN version for your MetaTrader 4 or MetaTrader 5 environment.',
      },
      {
        title: 'STEP 2 - Subscribe and Get Connected',
        body: 'Complete your subscription and follow the instructions provided to connect GOLD TITAN to your trading account.',
      },
      {
        title: 'STEP 3 - Configure Your Trading Settings',
        body: 'Review the available settings and configure the supported risk parameters according to your preferences.',
      },
      {
        title: 'STEP 4 - Activate and Monitor',
        body: 'Once activated, GOLD TITAN can execute its programmed strategy. You can review your account activity and continue monitoring your trading account.',
      },
    ],
    requirementsHeading: 'IMPORTANT ACCOUNT REQUIREMENTS',
    requirements: [
      'Minimum trading account balance: $250.',
      'Compatible with supported live MT4 and MT5 accounts.',
      'Demo accounts are not supported.',
      'No separate VPS is required.',
    ],
    // User-directed override CTA
    cta: 'GET ACCESS TODAY',
  },

  section6Technology: {
    overline: 'Get to know the technology',
    // User-directed override wording
    heading: 'Know This.',
    intro: 'Important to take note of',
    specs: [
      {
        title: 'A Clearly Defined Account Requirement',
        body: 'A minimum live trading balance of $250 is required before the bot can start trading.',
      },
    ],
    // User-directed replacement for the removed spec cards & transparency block
    slotsHeading: 'Only 20 Slots',
    slotsBody: 'Though a bot, there are only 20 spots available every month',
    cta: 'GET ACCESS NOW',
  },

  section7Pricing: {
    overline: 'Pricing, bonuses and launch availability',
    heading: 'Get Started with GOLD TITAN for Just $50.',
    // User-directed override wording
    intro:
      "You can get a 30% discount if you're one of the first 5 to subscribe this month",
    standardPlan: {
      columnHeaderLeft: 'STANDARD MONTHLY SUBSCRIPTION',
      columnHeaderRight: 'PRICE',
      name: 'GOLD TITAN - one month of software access',
      // User-directed override: discounted display price with struck regular price
      wasPrice: '$50',
      price: '$35 / month',
      discountNote: 'The discount is over after 5 slots are taken',
      inclusions: 'Experience the joys of automated trading',
      cta: 'SUBSCRIBE NOW',
    },
    bonus01: {
      title: 'BONUS 01 - FIRST FIVE SUBSCRIBERS',
      subheadline: 'GET 30% OFF YOUR FIRST MONTH!',
      // User-directed override wording ('launch' removed)
      body: "We're rewarding our first five subscribers of the month with an exclusive discount. Regular price: $50. Your discounted price: $35. You save $15! This offer is available only to the first five qualifying subscribers.",
    },
    bonus02: {
      title: 'BONUS 02 - MULTI-MONTH SUBSCRIPTION',
      subheadline: 'COMMIT TO MORE MONTHS. SAVE 20%.',
      body: 'Pay for two or more months upfront and receive 20% off the total subscription price. That is $40 per month when you subscribe for multiple months.',
      tableHeaders: ['TERM', 'STANDARD PRICE', 'DISCOUNTED PRICE', 'SAVINGS'] as const,
      rows: [
        { term: '2 months', termMonths: 2 as const, standard: '$100', discounted: '$80', savings: '$20' },
        { term: '3 months', termMonths: 3 as const, standard: '$150', discounted: '$120', savings: '$30' },
        { term: '6 months', termMonths: 6 as const, standard: '$300', discounted: '$240', savings: '$60' },
      ],
    },
    launchDetailsHeading: 'Bonus access and launch availability',
    bonus03: {
      // User-directed override title
      title: 'GUARANTEE',
      subheadline: 'A LITTLE MORE CONFIDENCE IN YOUR FIRST MONTH.',
      body: 'If your qualifying GOLD TITAN trades do not generate a net profit during your first 30 days, you will receive one additional month of GOLD TITAN software access at no additional subscription charge.',
      // User-directed override wording
      disclaimer:
        'This is an extension of your software subscription, not a refund or compensation for trading losses. Trading capital remains at risk, and no trading profit is guaranteed.',
    },
    launchSlots: {
      // User-directed override wording ('YOUR EARLY-ACCESS LAUNCH SLOTS' overline removed)
      subheadline: 'ONLY 20 SLOTS AVAILABLE!',
      // User-directed override wording (CHRISTMAS OFFER)
      body: "We're opening just 20 access subscription spots for the CHRISTMAS OFFER. Once all 20 places have been claimed, the offer will close.",
      remainingSuffix: '/ 20 SLOTS REMAINING',
      claimedSuffix: 'SLOTS CLAIMED',
      // User-directed override wording
      cta: 'GET YOUR SPOT NOW',
    },
    // Customer-facing promotional terms preserved verbatim; internal editorial instruction
    // ("This draft assumes the discounts cannot be combined; confirm this before publication.")
    // is withheld from public display per Build Prompt Section 06 ("Internal publishing notes vs public content").
    promotionalTerms:
      'Promotional terms: The 30% discount applies to the first month for the first five qualifying subscribers. The 20% discount applies to subscriptions of two or more months paid upfront. The extra-month offer is subject to its published eligibility conditions.',
  },

  section8Faqs: {
    overline: 'Frequently asked questions',
    heading: 'Frequently asked questions',
    items: [
      {
        question: '1. What is GOLD TITAN?',
        // User-directed override wording (MT4/MT5 mention removed)
        answer:
          'GOLD TITAN is an automated gold-trading software solution designed to help traders automate its programmed trading strategy on the XAUUSD (Gold) market. It works with compatible trading environments.',
      },
      {
        question: '2. Who is GOLD TITAN designed for?',
        answer:
          'GOLD TITAN is designed primarily with beginner and intermediate Forex traders in mind, particularly individuals aged 21-35 who are interested in gold trading and automated trading technology. However, anyone considering using the software should understand the risks associated with Forex and leveraged trading.',
      },
      {
        // User-directed override wording (MT4/MT5 mention removed)
        question: '3. Does GOLD TITAN work with my trading platform?',
        answer:
          'Yes. GOLD TITAN has compatible versions for supported trading platforms. You can select the version that corresponds with your supported trading platform.',
      },
      {
        question: '4. Do I need previous Forex trading experience?',
        answer:
          "You don't necessarily need to be an experienced trader to learn how to use GOLD TITAN. However, we recommend understanding the basics of Forex trading, how MetaTrader works and the risks associated with gold trading before subscribing.",
      },
      {
        question: '5. Does GOLD TITAN trade automatically?',
        answer:
          'GOLD TITAN is designed to automate its programmed gold-trading strategy. It executes the trading functions supported by its software configuration. You should still monitor your trading account and understand how the system operates.',
      },
      {
        question: '6. Does GOLD TITAN guarantee profits?',
        answer:
          'No. GOLD TITAN does not guarantee profits. The Forex and gold markets are unpredictable, and automated trading systems can experience losing trades and drawdowns. You can lose some or all of your trading capital. Always understand the risks before trading.',
      },
      {
        question: "7. What happens if I don't make a profit during my first month?",
        answer:
          'GOLD TITAN offers a conditional first-month subscription extension. If your qualifying GOLD TITAN trades do not produce a net profit during the first 30 days, you may qualify for one additional month of software access at no additional subscription charge. This offer does not refund or compensate you for trading losses, and it does not guarantee future profits. Please consult the full offer terms for eligibility and performance calculations.',
      },
      {
        question: '8. How much does GOLD TITAN cost?',
        answer:
          'The standard GOLD TITAN monthly subscription costs $50 per month. The first five qualifying subscribers receive 30% off their first month and pay $35 instead of $50. Customers who pay for two or more months upfront receive 20% off the total subscription cost. For example, two months normally cost $100, but with the multi-month discount, you pay $80.',
      },
      {
        question:
          '9. How much money do I need in my trading account before GOLD TITAN can start trading?',
        answer:
          'You need a minimum live trading account balance of $250 before GOLD TITAN can start trading. This is the minimum account-funding requirement, not a guarantee that $250 is sufficient for every risk setting or suitable for every trader. Trading with leverage involves significant financial risk, and you can lose your trading capital.',
      },
      {
        question: '10. Can I use GOLD TITAN on a demo account?',
        answer:
          'No. GOLD TITAN is not available for use on demo accounts. A supported live trading account is required to use the software.',
      },
      {
        question: '11. Do I need a VPS to run GOLD TITAN?',
        answer:
          'No. You do not need to purchase or configure a separate VPS. The required setup has already been handled for GOLD TITAN, making the setup process more convenient for subscribers.',
      },
      {
        question: '12. What happens when my subscription expires?',
        answer:
          "When your GOLD TITAN subscription expires, the bot is disconnected from your trading account and stops running. To continue using GOLD TITAN, you'll need to renew your subscription. Please remember to check and manage any open trades before your subscription expires. Positions may remain open with your broker even after the bot is disconnected and may no longer be managed by GOLD TITAN.",
      },
    ],
  },

  finalCta: {
    // User-directed override heading
    heading: 'Will You Embrace The New Era of Trading?',
    // User-directed override paragraphs
    paragraphs: [
      'You can keep doing everything manually and wait until you feel the need for automation. Or you can start exploring it now.',
      'We believe automated trading technology will continue to play an important role in how people approach trading.',
      'So take your place with GOLD TITAN.',
    ],
    // User-directed override CTA
    cta: 'Get Access to GOLD TITAN',
    tagline: 'GOLD TITAN - Gold Trading. Automated. Simplified.',
  },

  riskDisclosure: {
    heading: 'RISK DISCLOSURE',
    body: 'Forex and leveraged gold trading involves substantial risk and may not be suitable for everyone. You can lose some or all of your trading capital. Automated trading does not eliminate market risk, and results can be affected by market conditions, spreads, slippage, commissions, swaps, broker execution and technical interruptions. Historical performance does not guarantee future results. Only trade with money you can afford to lose.',
  },
} as const;
