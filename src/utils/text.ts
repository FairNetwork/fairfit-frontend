export const convertMonth = ({
    duration,
    priceAfterDuration
}: {
    duration: number;
    priceAfterDuration: number;
}) => {
    return `für ${duration} ${duration === 1 ? 'Monat' : 'Monate'}, danach ${priceAfterDuration} €`;
};
