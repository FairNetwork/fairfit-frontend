export const getSidebarBadge = (count: number, isDefaultPlan: boolean) => {
    if (!isDefaultPlan) {
        return {
            color: 'var(--primary-color)',
            text: count.toString()
        };
    } else {
        const text = `${count} / 3`;
        let color = 'var(--primary-color)';

        if (count === 2) {
            color = 'var(--warning)';
        } else if (count >= 3) {
            color = 'var(--invalid)';
        }
        return {
            color,
            text
        };
    }
};
