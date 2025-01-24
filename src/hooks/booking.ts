import { useState } from 'react';
import { Gender } from '../types/gym';

interface FormData {
    firstName: string;
    lastName: string;
    mail: string;
    birthday: string;
    gender?: Gender;
    postcode: string;
    number: string;
    city: string;
    street: string;
    owner: string;
    iban: string;
}

interface UseBookingData {
    formData: FormData;
    setField: (field: keyof FormData, value: string | Gender) => void;
    isFormValid: boolean;
}

export const useBookingData = (): UseBookingData => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        mail: '',
        birthday: '',
        gender: undefined,
        postcode: '',
        number: '',
        city: '',
        street: '',
        owner: '',
        iban: ''
    });

    const setField = (field: keyof FormData, value: string | Gender) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const isFormValid = Object.values(formData).every((value) =>
        typeof value === 'string' ? value.trim() !== '' : value !== undefined
    );

    return { formData, setField, isFormValid };
};
