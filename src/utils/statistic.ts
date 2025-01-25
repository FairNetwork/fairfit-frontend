export const convertStatisticsTimeline = (dateString: string) => {
    const [monthStr, yearStr] = dateString.split('/');
    const month = parseInt(monthStr, 10);
    const year = parseInt(yearStr, 10);
    const currentYear = new Date().getFullYear();

    const months = [
        'Jan',
        'Feb',
        'Mär',
        'Apr',
        'Mai',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Okt',
        'Nov',
        'Dez'
    ];

    if (month < 1 || month > 12) {
        throw new Error(
            'Ungültige Monatszahl. Bitte eine Zahl zwischen 1 und 12 im Datum verwenden.'
        );
    }

    const monthName = months[month - 1];

    return year === currentYear ? monthName : `${monthName} ${year}`;
};
