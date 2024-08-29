import { ReactElement } from 'react';
import useWindowDimensions from '../../../hooks1/windowDimensions';
import './headImage.scss';

interface HeadImageProps {
    children: ReactElement;
    image?: string;
}

const HeadImage = ({ children, image }: HeadImageProps) => {
    const { height } = useWindowDimensions();

    return (
        <div className="head-image" style={{ height }}>
            <img src={image} alt="head" />
            <div className="head-image__content">{children}</div>
        </div>
    );
};

HeadImage.displayName = 'HeadImage';

export default HeadImage;
