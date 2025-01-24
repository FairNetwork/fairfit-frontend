import { ComboBoxItem } from '../components/shared/combo-box/ComboBox';
import { Gender, GymType } from '../types/gym';

export const GYM_TYPES: ComboBoxItem[] = [
    { id: String(GymType.GYM), icon: 'fas fa-dumbbell', text: 'Fitness Studio' },
    { id: String(GymType.FOOTBALL), icon: 'fas fa-futbol', text: 'Fußball' },
    { id: String(GymType.AMERICAN_FOOTBALL), icon: 'fas fa-football', text: 'Football' },
    { id: String(GymType.VOLLEYBALL), icon: 'fas fa-volleyball', text: 'Volleyball' },
    { id: String(GymType.BASKETBALL), icon: 'fas fa-basketball', text: 'Basketball' },
    { id: String(GymType.BASEBALL), icon: 'fas fa-baseball', text: 'Baseball' },
    { id: String(GymType.BOWLING), icon: 'fas fa-bowling-ball', text: 'Bowling' },
    { id: String(GymType.GOLF), icon: 'fas fa-golf-ball-tee', text: 'Golf' },
    { id: String(GymType.HOCKEY), icon: 'fas fa-hockey-puck', text: 'Hockey' },
    {
        id: String(GymType.TABLE_TENNIS),
        icon: 'fas fa-table-tennis-paddle-ball',
        text: 'Tischtennis'
    },
    { id: String(GymType.SWIMMING), icon: 'fas fa-person-swimming', text: 'Schwimmen' }
];

export const GENDER_COMBOBOX_ITEMS: ComboBoxItem[] = [
    { id: String(Gender.MALE), text: 'Männlich' },
    { id: String(Gender.FEMALE), text: 'Weiblich' },
    { id: String(Gender.DIVERS), text: 'Divers' }
];
