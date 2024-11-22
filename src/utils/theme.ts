const theme: { [mode: string]: { name: string; value: string }[] } = {
    dark: [
        { name: '--background-color', value: '#121212' },
        { name: '--background-color-secondary', value: '#1E1E1E' },
        { name: '--primary-color', value: '#03DAC5' },
        { name: '--secondary-color', value: '' },
        {
            name: '--text-color',
            value: '#E0E0E0'
        },
        { name: '--text-color-secondary', value: '#B0B0B0' },
        { name: '--box-shadow', value: '0 2px 6px 0 rgba(0, 0, 0, 0.3)' }
    ],
    light: [
        { name: '--background-color', value: '#F9F9F9' },
        { name: '--background-color-secondary', value: '#E5E5E5' },
        { name: '--primary-color', value: '#03DAC5' },
        { name: '--secondary-color', value: '#6200EE' },
        { name: '--text-color', value: '#000000' },
        { name: '--text-color-secondary', value: '#555555' },
        { name: '--box-shadow', value: '0 2px 6px rgba(0, 0, 0, 0.1)' }
    ]
};

export const setCSSVariable = (mode: string) => {
    theme[mode].forEach(({ name, value }) => {
        document.documentElement.style.setProperty(name, value);
    });
};
