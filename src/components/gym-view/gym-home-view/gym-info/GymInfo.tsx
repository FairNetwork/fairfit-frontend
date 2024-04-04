import Location from './location/Location';
import OpeningTimes from './opening-times/OpeningTimes';
import Contact from './contact/Contact';
import SocialMedia from './social-media/SocialMedia';
import './gymInfo.scss';
import { createContext, useCallback, useMemo, useState } from 'react';

interface IGymInfoContext {
    contactCardGap: number;
    updateContactCardGap?: (gap: number) => void;
}

export const GymInfoContext = createContext<IGymInfoContext>({
    contactCardGap: 0,
    updateContactCardGap: undefined
});

GymInfoContext.displayName = 'GymInfoContext';

const GymInfo = () => {
    const [gymInfo, setGymInfo] = useState<IGymInfoContext['contactCardGap']>(0);

    const updateGymInfo = useCallback<(gap: number) => void>((gap) => {
        setGymInfo(gap);
    }, []);

    const providerValue = useMemo<IGymInfoContext>(
        () => ({
            updateContactCardGap: updateGymInfo,
            contactCardGap: gymInfo
        }),
        [gymInfo, updateGymInfo]
    );

    return (
        <GymInfoContext.Provider value={providerValue}>
            <div className="gym-info">
                <h2>Hier findest du uns</h2>
                <div className="gym-info__content">
                    <Location />
                    <OpeningTimes />
                    <Contact />
                    <SocialMedia />
                </div>
            </div>
        </GymInfoContext.Provider>
    );
};

GymInfo.displayName = 'GymInfo';

export default GymInfo;
