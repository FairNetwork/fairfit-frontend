import { ReactElement } from 'react';
import useWindowDimensions from '../../../hooks1/windowDimensions';
import headImage from '../../../assets/fairfit-head-image.jpg';
import './header.scss';

interface HeaderProps {
    children: ReactElement;
}

const Header = ({ children }: HeaderProps) => {
    const { height } = useWindowDimensions();

    // Get gym image or home image
    const image = headImage;

    return (
        <div className="header" style={{ height }}>
            <img src={image} alt="head" />
            <div>{children}</div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
