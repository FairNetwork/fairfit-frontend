import { ReactElement } from 'react';
import useWindowDimensions from '../../../hooks/windowDimensions';
import headImage from '../../../assets/fairfit-head-image.jpg';
import './header.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectImage } from '../../../redux/gym/selectors';

interface HeaderProps {
    children: ReactElement;
}

const Header = ({ children }: HeaderProps) => {
    const { height } = useWindowDimensions();

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
