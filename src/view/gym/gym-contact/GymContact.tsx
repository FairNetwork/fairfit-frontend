import Section from '../../../components/shared/section/Section';
import SocialMediaWrapper from '../../../components/shared/social-media-wrapper/SocialMediaWrapper';
import './gymContact.scss';

const GymContact = () => {
    return (
        <Section textColor="#FFF" backgroundColor="#C96868">
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
