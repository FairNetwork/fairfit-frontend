import { Carousel } from 'antd';
import { IBenefit } from '../../../types/benefit';
import './imageCarousel.scss';

interface ImageCarouselProps {
    images: IBenefit[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
    return (
        <div className="image-carousel">
            <Carousel autoplay>
                {images.map(({ imageUrl, id }) => (
                    <img src={imageUrl} key={`benefit-image--${id}`} alt="benefit image" />
                ))}
            </Carousel>
        </div>
    );
};

ImageCarousel.displayName = 'ImageCarousel';

export default ImageCarousel;
