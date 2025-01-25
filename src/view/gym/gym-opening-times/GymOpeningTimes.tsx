import { useGroupedOpeningTimes } from '../../../hooks/openingTimes';
import Section from '../../../components/shared/section/Section';
import { useMemo } from 'react';
import './gymOpeningTimes.scss';
import { useAppSelector } from '../../../hooks/redux';
import { selectOpeningTimes } from '../../../redux/gym/selectors';

const GymOpeningTimes = () => {
    const openingTimes = useAppSelector(selectOpeningTimes);

    const times = useGroupedOpeningTimes(openingTimes);

    const content = useMemo(() => {
        return times.map(({ endTime, startTime, closed, days }) => {
            return (
                <div className="gym-opening-times__content__item">
                    {days}: {closed ? 'geschlossen' : `${startTime} - ${endTime} Uhr`}
                </div>
            );
        });
    }, []);

    if (!openingTimes) {
        return undefined;
    }

    return (
        <Section textColor="#FFF" backgroundColor="#658147">
            <div className="gym-opening-times" id="scroll-openingtimes">
                <div className="gym-opening-times__headline">
                    Du möchtest persönlich mit uns reden oder ein Probetraining vereinbaren?
                </div>
                <div className="gym-opening-times__text">
                    Schaue gerne an den folgenden Zeiten bei uns vorbei.
                </div>
                <div className="gym-opening-times__content">{content}</div>
            </div>
        </Section>
    );
};

GymOpeningTimes.displayName = 'GymOpeningTimes';

export default GymOpeningTimes;
