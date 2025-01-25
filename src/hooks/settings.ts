import { useEffect, useState } from 'react';
import { GymType } from '../types/gym';
import { useAppSelector } from './redux';
import { selectGymSettings } from '../redux/gym/selectors';

interface GeneralSettings {
    name: string;
    address: string;
    mail: string;
    type?: GymType;
}

interface UseGeneralSettings {
    formData: GeneralSettings;
    setField: (field: keyof GeneralSettings, value: string | GymType) => void;
}

export const useGeneralSettings = (): UseGeneralSettings => {
    const [formData, setFormData] = useState<GeneralSettings>({
        address: '',
        type: undefined,
        mail: '',
        name: ''
    });

    const gym = useAppSelector(selectGymSettings);

    useEffect(() => {
        setFormData({
            name: gym?.name ?? '',
            mail: gym?.mail ?? '',
            type: gym?.type,
            address: gym?.address ?? ''
        });
    }, [gym]);

    const setField = (field: keyof GeneralSettings, value: string | GymType) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    return { formData, setField };
};
