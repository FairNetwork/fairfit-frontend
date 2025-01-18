import './logo.scss';
import { FC, ReactNode } from 'react';

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
    return (
        <div className="logo">
            <img src={src} alt="Sidebar logo" />
            {children}
        </div>
    );
};

Logo.displayName = 'Logo';

export default Logo;
