import { ReactElement } from 'react';
import { getWindowDimensions } from '../../../hooks/windowDimensions';
import headImage from '../../../assets/fairfit-head-image.jpg';
import './header.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectImage } from '../../../redux/gym/selectors';

interface HeaderProps {
    children: ReactElement;
}

const Header = ({ children }: HeaderProps) => {
    const { height } = getWindowDimensions();

    const image = useAppSelector(selectImage) ?? headImage;

    return (
        <div className="header" style={{ height }}>
            <img src={image} alt="head" />
            <div>{children}</div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
