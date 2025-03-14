import Section from '../../../components/shared/section/Section';
import SocialMediaWrapper from '../../../components/shared/social-media-wrapper/SocialMediaWrapper';
import './gymContact.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectSocialMedia } from '../../../redux/gym/selectors';

const GymContact = () => {
    const socialMedia = useAppSelector(selectSocialMedia);

    if (!socialMedia) {
        return undefined;
    }

    return (
        <Section textColor="#FFF" backgroundColor="#7B2E2F">
            <div className="gym-contact" id="scroll-contact">
                <div className="gym-contact__headline">Du möchtest mit uns in Kontakt treten?</div>
                <div className="gym-contact__text">Besuche uns auf Social Media</div>
                <SocialMediaWrapper />
            </div>
        </Section>
    );
};

GymContact.displayName = 'GymContact';

export default GymContact;
