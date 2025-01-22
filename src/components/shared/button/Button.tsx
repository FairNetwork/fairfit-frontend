import { CSSProperties, FC, ReactNode } from 'react';
import './button.scss';

interface ButtonProps {
    children: ReactNode;
    onClick?: VoidFunction;
    style?: CSSProperties;
}

const Button: FC<ButtonProps> = ({ children, onClick, style }) => {
    return (
        <button className="button" onClick={onClick} style={{ ...style }}>
            {children}
        </button>
    );
};

Button.displayName = 'Button';

export default Button;
