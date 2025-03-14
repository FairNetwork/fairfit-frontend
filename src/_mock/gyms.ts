import { Gym, GymType } from '../types/gym';
import { SocialMediaType } from '../types/socialMedia';
import { OpeningTimeType } from '../types/openingTimes';
import { StatisticType } from '../types/statistic';

export const GYM_MOCK_DATA: { [key: Gym['id']]: Gym } = {
    easyfitness: {
        name: 'EasyFitness',
        id: 'easyfitness',
        type: GymType.GYM,
        address: 'Von-Braun-Straße 54, 48683 Ahaus',
        image: 'https://easyfitness.club/wp-content/uploads/2018/12/EASYFITNESS-Social-Bild.jpg',
        abonnements: [
            {
                id: 'abonnement',
                title: 'Standard-Mitgliedschaft',
                isOffer: true,
                price: 29.99,
                details: [{ id: 'detail1', detail: 'Zugang zu allen Trainingsbereichen' }]
            },
            {
                id: 'abonnement2',
                title: 'Standard-Mitgliedschaft',
                isOffer: true,
                price: 29.99,
                details: [{ id: 'detail1', detail: 'Zugang zu allen Trainingsbereichen' }]
            }
        ],
        benefits: [
            {
                id: 'benefit1',
                imageUrl:
                    'https://images.t3n.de/news/wp-content/uploads/2022/11/getimgai-ki-bilder.jpg?class=structuredData-large'
            },
            {
                id: 'werwe',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BEuLe1_EGAF9Xfd-6mmIGl-j26m60nMF9Q&s'
            },
            {
                id: 'wer',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ187NRfGsjowJw3QCzzGdNcwLT-3we6VPJog&s'
            },
            {
                id: 'benewrsfdfsdfit1',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0wCDUJT02rYQQK73BFC2qqw9XYpasg3vPg&s'
            },
            {
                id: 'benefsdfsdfit1',
                imageUrl: 'https://i.pinimg.com/236x/c8/cd/60/c8cd602ddd029ea695bfcc20906c3233.jpg'
            },
            {
                id: 'dfsdf',
                imageUrl:
                    'https://helpedbyanerd.com/wp-content/uploads/ChatGPT-Bilder-erstellen.webp'
            }
        ],
        openingTimes: [
            {
                id: 'monday',
                type: OpeningTimeType.MONDAY,
                startTime: '06:00',
                endTime: '22:00',
                closed: false
            },
            {
                id: 'tuesday',
                type: OpeningTimeType.TUESDAY,
                startTime: '06:00',
                endTime: '22:00',
                closed: false
            },
            {
                id: 'wednesday',
                type: OpeningTimeType.WEDNESDAY,
                startTime: '06:00',
                endTime: '22:00',
                closed: false
            },
            {
                id: 'thursday',
                type: OpeningTimeType.THURSDAY,
                startTime: '06:00',
                endTime: '22:00',
                closed: false
            },
            {
                id: 'friday',
                type: OpeningTimeType.FRIDAY,
                startTime: '06:00',
                endTime: '22:00',
                closed: false
            },
            {
                id: 'saturday',
                type: OpeningTimeType.SATURDAY,
                startTime: '08:00',
                endTime: '20:00',
                closed: false
            },
            {
                id: 'sunday',
                type: OpeningTimeType.SUNDAY,
                startTime: '09:00',
                endTime: '18:00',
                closed: false
            }
        ],
        socialMedia: [
            { id: 'instagram', type: SocialMediaType.INSTAGRAM, userName: 'easyfitness_ahaus' },
            { id: 'facebook', type: SocialMediaType.FACEBOOK, userName: 'EasyFitnessAhaus' }
        ],
        statistics: [
            {
                id: 'abonnements_stats',
                type: StatisticType.ABONNEMENTS,
                entries: [
                    { month: '1/2024', total: 120 },
                    { month: '2/2024', total: 95 },
                    { month: '3/2024', total: 110 },
                    { month: '4/2024', total: 150 },
                    { month: '5/2024', total: 175 },
                    { month: '6/2024', total: 200 },
                    { month: '7/2024', total: 180 },
                    { month: '8/2024', total: 190 },
                    { month: '9/2024', total: 160 },
                    { month: '10/2024', total: 210 },
                    { month: '11/2024', total: 220 },
                    { month: '12/2024', total: 250 }
                ]
            },
            {
                id: 'requests_stats',
                type: StatisticType.REQUESTS,
                entries: [
                    { month: '1/2024', total: 120 },
                    { month: '2/2024', total: 95 },
                    { month: '3/2024', total: 110 },
                    { month: '4/2024', total: 150 },
                    { month: '5/2024', total: 175 },
                    { month: '6/2024', total: 200 },
                    { month: '7/2024', total: 180 },
                    { month: '8/2024', total: 190 },
                    { month: '9/2024', total: 160 },
                    { month: '10/2024', total: 210 },
                    { month: '11/2024', total: 220 },
                    { month: '12/2024', total: 250 }
                ]
            }
        ]
    },
    bodyfit: {
        name: 'BodyFit',
        id: 'bodyfit',
        type: GymType.GYM,
        address: 'Wüllener Str. 13, 48683 Ahaus',
        image: 'https://dein-bodyfit.de/site/assets/files/1015/bdf_lg.jpg',
        abonnements: [
            {
                id: 'ems-training',
                title: 'EMS-Training',
                isOffer: true,
                price: 49.9,
                details: [
                    { id: 'session', detail: '1x pro Woche EMS-Training (20 Minuten)' },
                    { id: 'personal', detail: 'Individuelles Personal Training' }
                ]
            }
        ],
        benefits: [
            {
                id: 'benefit1',
                imageUrl:
                    'https://images.t3n.de/news/wp-content/uploads/2022/11/getimgai-ki-bilder.jpg?class=structuredData-large'
            },
            {
                id: 'werwe',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BEuLe1_EGAF9Xfd-6mmIGl-j26m60nMF9Q&s'
            },
            {
                id: 'wer',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ187NRfGsjowJw3QCzzGdNcwLT-3we6VPJog&s'
            },
            {
                id: 'benewrsfdfsdfit1',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0wCDUJT02rYQQK73BFC2qqw9XYpasg3vPg&s'
            },
            {
                id: 'benefsdfsdfit1',
                imageUrl: 'https://i.pinimg.com/236x/c8/cd/60/c8cd602ddd029ea695bfcc20906c3233.jpg'
            },
            {
                id: 'dfsdf',
                imageUrl:
                    'https://helpedbyanerd.com/wp-content/uploads/ChatGPT-Bilder-erstellen.webp'
            }
        ],
        openingTimes: [
            {
                id: 'monday',
                type: OpeningTimeType.MONDAY,
                startTime: '08:00',
                endTime: '20:00',
                closed: false
            },
            {
                id: 'tuesday',
                type: OpeningTimeType.TUESDAY,
                startTime: '08:00',
                endTime: '20:00',
                closed: false
            },
            {
                id: 'wednesday',
                type: OpeningTimeType.WEDNESDAY,
                startTime: '08:00',
                endTime: '20:00',
                closed: false
            },
            {
                id: 'thursday',
                type: OpeningTimeType.THURSDAY,
                startTime: '08:00',
                endTime: '20:00',
                closed: false
            },
            {
                id: 'friday',
                type: OpeningTimeType.FRIDAY,
                startTime: '08:00',
                endTime: '20:00',
                closed: false
            },
            {
                id: 'saturday',
                type: OpeningTimeType.SATURDAY,
                startTime: '09:00',
                endTime: '14:00',
                closed: false
            }
        ],
        socialMedia: [
            { id: 'instagram', type: SocialMediaType.INSTAGRAM, userName: 'bodystreet_ahaus' },
            { id: 'facebook', type: SocialMediaType.FACEBOOK, userName: 'BodyStreetAhaus' }
        ]
    },
    'clever-fit': {
        name: 'Clever Fit Ahaus',
        id: 'clever-fit',
        type: GymType.GYM,
        address: 'Von-Braun-Straße 54, 48683 Ahaus',
        image: 'https://www.clever-fit.com/app/uploads/2022/10/IMG_7153-2-1-scaled.jpeg',
        abonnements: [
            {
                id: 'standard',
                title: 'Standard Mitgliedschaft',
                isOffer: true,
                price: 44.9,
                details: [
                    { id: 'duration', detail: '12 Monate Laufzeit' },
                    { id: 'access', detail: 'Zugang zu allen Geräten und Kursen' }
                ]
            },
            {
                id: 'promotion',
                title: '3 Monate für 10€ pro Monat',
                isOffer: true,
                price: 10.0,
                details: [
                    { id: 'promo-duration', detail: 'Gültig für die ersten 3 Monate' },
                    { id: 'conditions', detail: 'Anschließend 12 Monate für 44,90€ pro Monat' }
                ]
            }
        ],
        benefits: [
            {
                id: 'benefit1',
                imageUrl:
                    'https://images.t3n.de/news/wp-content/uploads/2022/11/getimgai-ki-bilder.jpg?class=structuredData-large'
            },
            {
                id: 'werwe',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BEuLe1_EGAF9Xfd-6mmIGl-j26m60nMF9Q&s'
            },
            {
                id: 'wer',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ187NRfGsjowJw3QCzzGdNcwLT-3we6VPJog&s'
            },
            {
                id: 'benewrsfdfsdfit1',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0wCDUJT02rYQQK73BFC2qqw9XYpasg3vPg&s'
            },
            {
                id: 'benefsdfsdfit1',
                imageUrl: 'https://i.pinimg.com/236x/c8/cd/60/c8cd602ddd029ea695bfcc20906c3233.jpg'
            },
            {
                id: 'dfsdf',
                imageUrl:
                    'https://helpedbyanerd.com/wp-content/uploads/ChatGPT-Bilder-erstellen.webp'
            }
        ],
        openingTimes: [
            {
                id: 'monday',
                type: OpeningTimeType.MONDAY,
                startTime: '07:00',
                endTime: '22:00',
                closed: false
            },
            {
                id: 'tuesday',
                type: OpeningTimeType.TUESDAY,
                startTime: '07:00',
                endTime: '22:00',
                closed: false
            },
            {
                id: 'wednesday',
                type: OpeningTimeType.WEDNESDAY,
                startTime: '07:00',
                endTime: '22:00',
                closed: false
            },
            {
                id: 'thursday',
                type: OpeningTimeType.THURSDAY,
                startTime: '07:00',
                endTime: '22:00',
                closed: false
            },
            {
                id: 'friday',
                type: OpeningTimeType.FRIDAY,
                startTime: '07:00',
                endTime: '22:00',
                closed: false
            },
            {
                id: 'saturday',
                type: OpeningTimeType.SATURDAY,
                startTime: '09:00',
                endTime: '20:00',
                closed: false
            },
            {
                id: 'sunday',
                type: OpeningTimeType.SUNDAY,
                startTime: '09:00',
                endTime: '20:00',
                closed: false
            }
        ],
        socialMedia: [
            { id: 'instagram', type: SocialMediaType.INSTAGRAM, userName: 'cleverfitahaus' },
            { id: 'facebook', type: SocialMediaType.FACEBOOK, userName: 'cleverfitahaus' }
        ]
    },
    shield: {
        name: 'Shield Gym',
        id: 'shield',
        type: GymType.GYM,
        address: 'Schillerstraße 25, 48683 Ahaus',
        image: 'https://cdns3.fitfit.fitness/de/media/items/540x280/13371-Shield-Das-Zentrum-CRnvl.jpg',
        abonnements: [
            {
                id: 'basic',
                title: 'Basic Mitgliedschaft',
                isOffer: false,
                price: 29.9,
                details: [
                    { id: 'access', detail: 'Zugang zu allen Geräten' },
                    { id: 'support', detail: 'Begrüßungstraining inklusive' }
                ]
            },
            {
                id: 'premium',
                title: 'Premium Mitgliedschaft',
                isOffer: true,
                price: 39.9,
                details: [
                    { id: 'access', detail: 'Zugang zu allen Geräten und Kursen' },
                    { id: 'drinks', detail: 'Kostenlose Getränke-Flat' }
                ]
            }
        ],
        benefits: [
            {
                id: 'benefit1',
                imageUrl:
                    'https://images.t3n.de/news/wp-content/uploads/2022/11/getimgai-ki-bilder.jpg?class=structuredData-large'
            },
            {
                id: 'werwe',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BEuLe1_EGAF9Xfd-6mmIGl-j26m60nMF9Q&s'
            },
            {
                id: 'wer',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ187NRfGsjowJw3QCzzGdNcwLT-3we6VPJog&s'
            },
            {
                id: 'benewrsfdfsdfit1',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0wCDUJT02rYQQK73BFC2qqw9XYpasg3vPg&s'
            },
            {
                id: 'benefsdfsdfit1',
                imageUrl: 'https://i.pinimg.com/236x/c8/cd/60/c8cd602ddd029ea695bfcc20906c3233.jpg'
            },
            {
                id: 'dfsdf',
                imageUrl:
                    'https://helpedbyanerd.com/wp-content/uploads/ChatGPT-Bilder-erstellen.webp'
            }
        ],
        openingTimes: [
            {
                id: 'weekday',
                type: OpeningTimeType.MONDAY,
                startTime: '06:00',
                endTime: '22:00',
                closed: false
            },
            {
                id: 'weekend',
                type: OpeningTimeType.SUNDAY,
                startTime: '08:00',
                endTime: '20:00',
                closed: false
            }
        ],
        socialMedia: [
            { id: 'instagram', type: SocialMediaType.INSTAGRAM, userName: 'shieldgym_ahaus' },
            { id: 'facebook', type: SocialMediaType.FACEBOOK, userName: 'ShieldGymAhaus' }
        ]
    },
    aquahaus: {
        name: 'AquAHAUS',
        id: 'aquahaus',
        type: GymType.SWIMMING,
        address: 'Unterortwick 32, 48683 Ahaus',
        image: 'https://dtf-ingenieure.com/fileadmin/DTF/Bilder/Sport_und_Freizeitbaeder/Ahaus/_MG_5281_1_2_adjust.jpg',
        abonnements: [
            {
                id: 'single-entry',
                title: 'Einzeleintritt',
                isOffer: false,
                price: 5.0,
                details: [
                    { id: 'adult', detail: 'Erwachsene: 5,00 €' },
                    { id: 'child', detail: 'Kinder (4-17 Jahre): 3,00 €' }
                ]
            },
            {
                id: 'family-pass',
                title: 'Familienkarte',
                isOffer: true,
                price: 12.0,
                details: [{ id: 'family', detail: '2 Erwachsene und bis zu 3 Kinder' }]
            }
        ],
        benefits: [
            {
                id: 'benefit1',
                imageUrl:
                    'https://images.t3n.de/news/wp-content/uploads/2022/11/getimgai-ki-bilder.jpg?class=structuredData-large'
            },
            {
                id: 'werwe',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BEuLe1_EGAF9Xfd-6mmIGl-j26m60nMF9Q&s'
            },
            {
                id: 'wer',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ187NRfGsjowJw3QCzzGdNcwLT-3we6VPJog&s'
            },
            {
                id: 'benewrsfdfsdfit1',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0wCDUJT02rYQQK73BFC2qqw9XYpasg3vPg&s'
            },
            {
                id: 'benefsdfsdfit1',
                imageUrl: 'https://i.pinimg.com/236x/c8/cd/60/c8cd602ddd029ea695bfcc20906c3233.jpg'
            },
            {
                id: 'dfsdf',
                imageUrl:
                    'https://helpedbyanerd.com/wp-content/uploads/ChatGPT-Bilder-erstellen.webp'
            }
        ],
        openingTimes: [
            {
                id: 'monday',
                type: OpeningTimeType.MONDAY,
                startTime: '06:00',
                endTime: '21:00',
                closed: false
            },
            {
                id: 'tuesday',
                type: OpeningTimeType.TUESDAY,
                startTime: '06:00',
                endTime: '21:00',
                closed: false
            },
            {
                id: 'wednesday',
                type: OpeningTimeType.WEDNESDAY,
                startTime: '06:00',
                endTime: '21:00',
                closed: false
            },
            {
                id: 'thursday',
                type: OpeningTimeType.THURSDAY,
                startTime: '06:00',
                endTime: '21:00',
                closed: false
            },
            {
                id: 'friday',
                type: OpeningTimeType.FRIDAY,
                startTime: '06:00',
                endTime: '21:00',
                closed: false
            },
            {
                id: 'saturday',
                type: OpeningTimeType.SATURDAY,
                startTime: '08:00',
                endTime: '18:00',
                closed: false
            },
            {
                id: 'sunday',
                type: OpeningTimeType.SUNDAY,
                startTime: '08:00',
                endTime: '18:00',
                closed: false
            }
        ],
        socialMedia: [
            { id: 'facebook', type: SocialMediaType.FACEBOOK, userName: 'AquAHAUS.Kombibad' }
        ]
    }
};
