import './logo.scss';
import { FC, ReactNode, useRef } from 'react';

interface LogoProps {
    /**
     * Optional content on the right side of the logo.
     */
    children?: ReactNode;
    /**
     * The source of the logo.
     */
    src: string;
}

const Logo: FC<LogoProps> = ({ src, children }) => {
    const clickCountRef = useRef(0);
    const timeoutRef = useRef<number>(undefined);

    const handleClick = () => {
        clickCountRef.current++;

        window.clearTimeout(timeoutRef.current);

        timeoutRef.current = window.setTimeout(() => {
            clickCountRef.current = 0;
        }, 300);

        if (clickCountRef.current === 10) {
            alert('Ich liebe meinen Vater♥️');
        }
    };

    return (
        <div className="logo" onClick={handleClick}>
            <img src={src} alt="Sidebar logo" />
            {children}
        </div>
    );
};

Logo.displayName = 'Logo';

export default Logo;
