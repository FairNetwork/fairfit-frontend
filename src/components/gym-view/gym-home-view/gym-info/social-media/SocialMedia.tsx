import './socialMedia.scss';
import { ReactElement, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { getColor, getIcon, getProfileUrl, getTitle } from '../../../../../utils/icon';
import { GymContext } from '../../../../App';
import { RootState } from '../../../../../redux/store';
import { selectContactById } from '../../../../../redux/gym/selectors';
import { useAppSelector } from '../../../../../hooks/redux';
import ContactCard from '../../../../shared/contact-card/ContactCard';
import { GymInfoContext } from '../GymInfo';

const SocialMedia = () => {
    const { gymInternalId } = useContext(GymContext);
    const { updateContactCardGap } = useContext(GymInfoContext);

    const parentRef = useRef<HTMLDivElement>(null);
    const [spacing, setSpacing] = useState(0);

    const contactSelector = useCallback(
        (state: RootState) => selectContactById(state, gymInternalId),
        [gymInternalId]
    );

    const contact = useAppSelector(contactSelector);

    const handleClick = (url: string) => {
        window.open(url, '_blank');
    };

    useEffect(() => {
        const calculateDimensions = () => {
            if (parentRef.current) {
                const parentWidth = parentRef.current.clientWidth;
                const childWidth = 176;
                const newNumberOfChildren = Math.floor(parentWidth / childWidth);
                const newSpacing =
                    (parentWidth - newNumberOfChildren * childWidth) / (newNumberOfChildren - 1);
                setSpacing(newSpacing > 50 ? 50 : newSpacing);

                if (typeof updateContactCardGap === 'function') {
                    updateContactCardGap(newSpacing > 50 ? 50 : newSpacing);
                }
            }
        };

        calculateDimensions();
        window.addEventListener('resize', calculateDimensions);
        return () => {
            window.removeEventListener('resize', calculateDimensions);
        };
    }, [spacing, updateContactCardGap]);

    const icons = useMemo(() => {
        const items: ReactElement[] = [];

        if (!contact?.socialMedia) {
            return items;
        }

        for (const [key, value] of Object.entries(contact.socialMedia)) {
            const icon = getIcon(key);
            const url = getProfileUrl(key, value);
            const title = getTitle(key);
            const color = getColor(key);

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
                    color={color}
                />
            );
        }

        return items;
    }, [contact?.socialMedia]);

    return (
        <div className="social-media">
            <div className="social-media__content" ref={parentRef} style={{ columnGap: spacing }}>
                {icons}
            </div>
        </div>
    );
};

SocialMedia.disolayName = 'SocialMedia';

export default SocialMedia;
