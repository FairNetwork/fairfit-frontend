import { CSSProperties, MouseEventHandler } from 'react';

interface IconProps {
    icon: string;
    size?: CSSProperties['fontSize'];
    color?: CSSProperties['color'];
    onClick?: MouseEventHandler<HTMLElement>;
}

const Icon = ({ icon, color, size, onClick }: IconProps) => {
    return <i className={icon} style={{ fontSize: size, color }} onClick={onClick}></i>;
};

Icon.displayName = 'Icon';

export default Icon;
