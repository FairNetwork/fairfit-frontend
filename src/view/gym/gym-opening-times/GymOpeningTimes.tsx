import './gymOpeningTimes.scss';
import { useGroupedOpeningTimes } from '../../../hooks/openingTimes';
import { OpeningTimeType } from '../../../types/openingTimes';
import Section from '../../../components/shared/section/Section';
import { useMemo } from 'react';

const GymOpeningTimes = () => {
    const openingTimes = [
        {
            id: '1',
            type: OpeningTimeType.MONDAY,
            startTime: '12:00',
            endTime: '16:00',
            closed: false
        },
        {
            id: '2',
            type: OpeningTimeType.FRIDAY,
            startTime: '12:00',
            endTime: '16:00',
            closed: false
        }
    ];

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

    return (
        <Section textColor="#FFF" backgroundColor="#000">
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
