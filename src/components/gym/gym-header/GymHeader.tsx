import './gymHeader.scss';
import { useAppSelector } from '../../../hooks/redux';
import {
    selectGymName,
    selectGymSlogan,
    selectOpeningTimeByType,
    selectSocialMedia
} from '../../../redux/gym/selectors';
import { useMemo } from 'react';
import { getCurrentOpeningTimeType } from '../../../utils/openingTimes';
import { getIcon, getProfileUrl, getSocialMediaImage } from '../../../utils/socialMedia';
import Icon from '../../shared/icon/Icon';

const GymHeader = () => {
    const gymName = useAppSelector(selectGymName);
    const gymSlogan = useAppSelector(selectGymSlogan);
    const socialMedia = useAppSelector(selectSocialMedia);

    const type = getCurrentOpeningTimeType();

    const currentOpeningTime = useAppSelector((state) => selectOpeningTimeByType(state, type));

    const openingTime = useMemo(() => {
        if (!currentOpeningTime) {
            return undefined;
        }

        if (currentOpeningTime.closed) {
            return 'Heute geschlossen.';
        }

        const { startTime, endTime } = currentOpeningTime;

        return `Heute von ${startTime.substring(0, startTime.length - 3)} Uhr bis ${endTime.substring(0, endTime.length - 3)} Uhr geöffnet.`;
    }, [currentOpeningTime]);

    const socialMediaContent = useMemo(() => {
        return socialMedia?.map(({ type, id, userName }) => (
            <Icon
                icon={getIcon(type) ?? ''}
                onClick={() => window.open(getProfileUrl(type, userName), '_blank')}
                key={`social-media-${id}`}
                size={24}
            />
        ));
    }, [socialMedia]);

    return (
        <div className="gym-header">
            <h1>{gymName}</h1>
            <b>{gymSlogan}</b>
            {openingTime && <p>{openingTime}</p>}
            {socialMediaContent && (
                <div className="gym-header__social-media">{socialMediaContent}</div>
            )}
        </div>
    );
};

GymHeader.displayName = 'GymHeader';

export default GymHeader;
