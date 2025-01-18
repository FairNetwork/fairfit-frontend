import './gymContact.scss';
import Section from '../../../components/shared/section/Section';
import SocialMediaWrapper from '../../../components/shared/social-media-wrapper/SocialMediaWrapper';

const GymContact = () => {
    return (
        <Section backgroundColor="#000" textColor="#FFF">
            <div className="gym-contact">
                <div className="gym-contact__headline">Du möchtest mit uns in Kontakt treten?</div>
                <div className="gym-contact__text">Besuche uns auf Social Media</div>
                <SocialMediaWrapper />
            </div>
        </Section>
    );
};

GymContact.displayName = 'GymContact';

export default GymContact;
