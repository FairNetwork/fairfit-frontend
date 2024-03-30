import { ReactElement, useMemo } from 'react';

interface ImageCarouselProps {
    images: {
        id: string;
        url: string;
    }[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const content = useMemo(() => {
        const items: ReactElement[] = [];

        images.forEach(({ id, url }) => {
            items.push(<div>test</div>);
        });

        return items;
    }, [images]);

    return <div>test</div>;
};

ImageCarousel.displayName = 'ImageCarousel';

export default ImageCarousel;
