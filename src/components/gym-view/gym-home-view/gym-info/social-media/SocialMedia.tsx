import './socialMedia.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement, useCallback, useContext, useMemo } from 'react';
import { getIcon, getProfileUrl } from '../../../../../utils/icon';
import { GymContext } from '../../../../App';
import { RootState } from '../../../../../redux/store';
import { selectContactById } from '../../../../../redux/gym/selectors';
import { useAppSelector } from '../../../../../hooks/redux';

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

            if (!icon || !url) {
                return;
            }

            items.push(
                <div key={value} className="social-media__wrapper" onClick={() => handleClick(url)}>
                    <div className="social-media__wrapper__icon">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    <div className="social-media__wrapper__name">{value}</div>
                </div>
            );
        }

        return items;
    }, [contact?.socialMedia]);

    return <div className="social-media">{icons}</div>;
};

SocialMedia.disolayName = 'SocialMedia';

export default SocialMedia;
