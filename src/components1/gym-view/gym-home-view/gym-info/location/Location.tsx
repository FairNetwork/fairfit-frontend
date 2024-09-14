// import { Map, Marker } from 'pigeon-maps';
// import { osm } from 'pigeon-maps/providers';
// import './location.scss';
// import React, { useCallback, useContext } from 'react';
// import { GymContext } from '../../../../App';
// import { RootState } from '../../../../../redux/store';
// import { selectLocationById } from '../../../../../redux/gym/selectors';
// import { useAppSelector } from '../../../../../hooks/redux';
//
// const Location = () => {
//     const { gymInternalId } = useContext(GymContext);
//
//     const addressSelector = useCallback(
//         (state: RootState) => selectLocationById(state, gymInternalId),
//         [gymInternalId]
//     );
//
//     const address = useAppSelector(addressSelector);
//
//     const handleMarkerClick = () => {
//         if (
//             navigator.platform.indexOf('iPhone') !== -1 ||
//             navigator.platform.indexOf('iPad') !== -1 ||
//             navigator.platform.indexOf('iPod') !== -1
//         ) {
//             window.open(
//                 `maps://maps.google.com/maps?daddr=${address?.coordinates[0]},${address?.coordinates[1]}&amp;ll=`
//             );
//         } else {
//             window.open(
//                 `https://maps.google.com/maps?daddr=${address?.coordinates[0]},${address?.coordinates[1]}&amp;ll=`
//             );
//         }
//     };
//
//     return (
//         <div className="location">
//             {address?.coordinates && (
//                 <div className="location__map">
//                     <Map
//                         provider={osm}
//                         defaultCenter={address?.coordinates}
//                         defaultZoom={15}
//                         twoFingerDrag>
//                         <Marker
//                             onClick={handleMarkerClick}
//                             width={50}
//                             anchor={address?.coordinates}
//                             color="#38524c"
//                         />
//                     </Map>
//                 </div>
//             )}
//             <div className="location__address">{address?.address}</div>
//         </div>
//     );
// };
//
// Location.displayName = 'Location';
//
// export default Location;
