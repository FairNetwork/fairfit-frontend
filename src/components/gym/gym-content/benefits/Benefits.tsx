import ImageCarousel from '../../../shared/image-carousel/ImageCarousel';
import { selectBenefits } from '../../../../redux/gym/selectors';
import { useAppSelector } from '../../../../hooks/redux';

const Benefits = () => {
    const benefits = useAppSelector(selectBenefits);

    return (
        <div className="benefits">
            {benefits && (
                <>
                    <h2>Unsere Leistungen</h2>
                    <div className="benefits__content">
                        <ImageCarousel images={benefits} />
                    </div>
                </>
            )}
        </div>
    );
};

Benefits.displayName = 'Benefits';

export default Benefits;
