import { Map, Marker } from 'pigeon-maps';
import { osm } from 'pigeon-maps/providers';
import './location.scss';
import { useCallback, useContext } from 'react';
import { GymContext } from '../../../../App';
import { RootState } from '../../../../../redux/store';
import { selectLocationById } from '../../../../../redux/gym/selectors';
import { useAppSelector } from '../../../../../hooks/redux';

const Location = () => {
    const { gymInternalId } = useContext(GymContext);

    const addressSelector = useCallback(
        (state: RootState) => selectLocationById(state, gymInternalId),
        [gymInternalId]
    );

    const address = useAppSelector(addressSelector);

    return (
        <div className="location">
            {address?.coordinates && (
                <div className="location__map">
                    <Map provider={osm} defaultCenter={address?.coordinates} defaultZoom={15}>
                        <Marker width={50} anchor={address?.coordinates} color="#38524c" />
                    </Map>
                </div>
            )}
            <div className="location__address">{address?.address}</div>
        </div>
    );
};

Location.displayName = 'Location';

export default Location;
