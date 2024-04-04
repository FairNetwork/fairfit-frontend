import { CSSProperties } from 'react';

interface IconProps {
    icon: string;
    size?: CSSProperties['fontSize'];
    color?: CSSProperties['color'];
}

const Icon = ({ icon, color, size }: IconProps) => {
    return <i className={icon} style={{ fontSize: size, color }}></i>;
};

Icon.displayName = 'Icon';

export default Icon;
