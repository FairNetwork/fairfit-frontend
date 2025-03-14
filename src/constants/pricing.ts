import { Pricing, PricingBenefits, PricingType } from '../types/pricing';

export const PRICING: Pricing[] = [
    {
        price: 19.0,
        name: 'Athlete',
        type: PricingType.ATHLETE,
        description:
            'Perfekt für Sportanbieter, die ihre Online-Präsenz aufbauen und neue Kunden erreichen möchten.'
    },
    {
        price: 39.0,
        name: 'Champion',
        type: PricingType.CHAMPION,
        description:
            'Für professionelle Sportanbieter, die datenbasierte Entscheidungen treffen wollen.'
    },
    {
        price: 59.0,
        name: 'Legend',
        type: PricingType.LEGEND,
        description:
            'Ideal für Sporteinrichtungen, die aktiv mit Social Media arbeiten und ihre Reichweite maximieren möchten.',
        isDisabled: true,
        badgeText: 'In Kürze'
    }
];

export const PRICING_BENEFITS: PricingBenefits = {
    // ATHLETE
    '019593ea-9c28-7ad3-833c-e58de6c73220': {
        includes: [
            '3 Angebote erstellen',
            '3 Benefits hinzufügen',
            'Öffnungszeiten verwalten',
            'Social-Media-Links einfügen'
        ],
        notIncluded: [
            'Statistiken zur Reichweite einsehen',
            'Social-Media-Postings  erstellen & planen'
        ]
    },
    // CHAMPION
    '019593ea-c568-7b3e-8937-f7da3de8caee': {
        includes: [
            'Unbegrenzte Angebote',
            'Unbegrenzte Benefits',
            'Öffnungszeiten verwalten',
            'Social-Media-Links einfügen',
            'Statistiken zur Reichweite einsehen'
        ],
        notIncluded: ['Social-Media-Postings  erstellen & planen']
    },
    // LEGEND
    '01959473-4741-7bf3-9d77-941c7e340c86': {
        includes: [
            'Unbegrenzte Angebote',
            'Unbegrenzte Benefits',
            'Öffnungszeiten verwalten',
            'Social-Media-Links einfügen',
            'Statistiken zur Reichweite einsehen',
            'Social-Media-Postings erstellen & planen'
        ],
        notIncluded: []
    }
};
