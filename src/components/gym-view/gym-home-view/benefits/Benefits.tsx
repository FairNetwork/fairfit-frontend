import React from 'react';
import ImageCarousel from '../../../shared/image-carousel/ImageCarousel';

const Benefits = () => {
    const images = [
        {
            id: '1',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUZ-vx3rBZ4vmdMmvxo2ZxXdvtooiIGoRvwr030oapw&s'
        },
        {
            id: '2',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_bJ0sKAdMkGwglbZeJVP3sT8-hgEnY8Zr3iChI2fZA&s'
        },
        {
            id: '3',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8P2t8aIZHgoM-LG--JQYWe-_-zfMRTOL1e1VPAQ7zMA&s'
        }
    ];

    return (
        <div className="benefits">
            <h2>Unsere Leistungen</h2>
            <div className="benefits__content">
                <ImageCarousel images={images} />
            </div>
        </div>
    );
};

Benefits.displayName = 'Benefits';

export default Benefits;
