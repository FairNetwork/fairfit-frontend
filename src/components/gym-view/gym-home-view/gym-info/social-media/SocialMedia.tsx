import './socialMedia.scss';
import { ReactElement, useCallback, useContext, useMemo } from 'react';
import { getIcon, getProfileUrl, getTitle } from '../../../../../utils/icon';
import { GymContext } from '../../../../App';
import { RootState } from '../../../../../redux/store';
import { selectContactById } from '../../../../../redux/gym/selectors';
import { useAppSelector } from '../../../../../hooks/redux';
import ContactCard from '../../../../shared/contact-card/ContactCard';

const SocialMedia = () => {
    const { gymInternalId } = useContext(GymContext);

    const contactSelector = useCallback(
        (state: RootState) => selectContactById(state, gymInternalId),
        [gymInternalId]
    );

    const contact = useAppSelector(contactSelector);

    const handleClick = (url: string) => {
        window.open(url, '_blank');
    };

    const icons = useMemo(() => {
        const items: ReactElement[] = [];

        if (!contact?.socialMedia) {
            return items;
        }

        for (const [key, value] of Object.entries(contact.socialMedia)) {
            const icon = getIcon(key);
            const url = getProfileUrl(key, value);
            const title = getTitle(key);

            if (!icon || !url || !title) {
                return;
            }

            items.push(
                <ContactCard
                    key={value}
                    onClick={() => handleClick(url)}
                    icon={icon}
                    title={title}
                    text={value}
                />
            );
        }

        return items;
    }, [contact?.socialMedia]);

    return (
        <div className="social-media">
            <div className="social-media__content">{icons}</div>
        </div>
    );
};

SocialMedia.disolayName = 'SocialMedia';

export default SocialMedia;
