// import { Button, Tooltip } from '@mui/material';
// import './offers.scss';
// import Accordion from '../../../../../shared/accordion/Accordion';
// import { useAppDispatch, useAppSelector } from '../../../../../../hooks/redux';
// import {
//     selectAbonnementsById,
//     selectHasOffers,
//     selectOffersById
// } from '../../../../../../redux/gym/selectors';
// import React, { ReactElement, useCallback, useContext, useMemo, useState } from 'react';
// import Card from '../../../../../shared/card/Card';
// import { Offer } from '../../../../../../types/offer';
// import { setSelectedOffer } from '../../../../../../redux/user/slice';
// import { selectSelectedOfferId } from '../../../../../../redux/user/selectors';
// import { isMobile } from '../../../../../../utils/environment';
// import { GymContext } from '../../../../../App';
// import { RootState } from '../../../../../../redux/store';
//
// interface OffersProps {
//     onClick: VoidFunction;
// }
//
// const Offers = ({ onClick }: OffersProps) => {
//     const dispatch = useAppDispatch();
//
//     const { gymInternalId } = useContext(GymContext);
//
//     const offersSelector = useCallback(
//         (state: RootState) => selectOffersById(state, gymInternalId),
//         [gymInternalId]
//     );
//
//     const abonnementsSelector = useCallback(
//         (state: RootState) => selectAbonnementsById(state, gymInternalId),
//         [gymInternalId]
//     );
//
//     const gymSelector = useCallback(
//         (state: RootState) => selectHasOffers(state, gymInternalId),
//         [gymInternalId]
//     );
//
//     const hasOffers = useAppSelector(gymSelector);
//     const offers = useAppSelector(offersSelector);
//     const abonnements = useAppSelector(abonnementsSelector);
//
//     const selectedOfferId = useAppSelector(selectSelectedOfferId);
//
//     const [isTooltipOpen, setIsTooltipOpen] = useState(false);
//
//     const handleCardClick = useCallback(
//         (id: Offer['id']) => {
//             let selectedOffer: Offer | undefined;
//
//             offers?.forEach((offer) => {
//                 if (offer.id === id) {
//                     selectedOffer = offer;
//                 }
//             });
//
//             if (!selectedOffer) {
//                 abonnements?.forEach((abonnement) => {
//                     if (abonnement.id === id) {
//                         selectedOffer = abonnement;
//                     }
//                 });
//             }
//
//             dispatch(setSelectedOffer(selectedOffer?.id));
//         },
//         [abonnements, dispatch, offers]
//     );
//
//     const renderedOffers = useMemo(() => {
//         const items: ReactElement[] = [];
//
//         offers?.forEach(
//             ({ title, color, priceAfterDuration, duration, id, details, price, isOffer }) => {
//                 items.push(
//                     <Card
//                         onClick={handleCardClick}
//                         isSelected={selectedOfferId === id}
//                         key={id}
//                         id={id}
//                         color={color}
//                         title={title}
//                         details={details}
//                         price={price}
//                         isOffer={isOffer}
//                         priceAfterDuration={priceAfterDuration}
//                         duration={duration}
//                     />
//                 );
//             }
//         );
//
//         return items;
//     }, [handleCardClick, offers, selectedOfferId]);
//
//     const renderedAbonnements = useMemo(() => {
//         const items: ReactElement[] = [];
//
//         abonnements?.forEach(
//             ({ title, priceAfterDuration, duration, color, details, price, isOffer, id }) => {
//                 items.push(
//                     <Card
//                         onClick={handleCardClick}
//                         isSelected={selectedOfferId === id}
//                         key={id}
//                         id={id}
//                         color={color}
//                         title={title}
//                         details={details}
//                         price={price}
//                         isOffer={isOffer}
//                         priceAfterDuration={priceAfterDuration}
//                         duration={duration}
//                     />
//                 );
//             }
//         );
//
//         return items;
//     }, [abonnements, handleCardClick, selectedOfferId]);
//
//     return (
//         <div className="offers">
//             {hasOffers && (
//                 <Accordion id={1} isDefaultOpen title="Aktuelle Angebote">
//                     <div className="offers__content">{renderedOffers}</div>
//                 </Accordion>
//             )}
//             <Accordion id={2} isDefaultOpen={!hasOffers} title="Standart Abonnements">
//                 <div className="offers__content">{renderedAbonnements}</div>
//             </Accordion>
//             <div className="offers__button">
//                 <Tooltip
//                     title="Bitte wähle ein Abo aus"
//                     open={isTooltipOpen}
//                     onClose={() => setIsTooltipOpen(false)}
//                     placement="top"
//                     arrow>
//                     <span
//                         onClick={() =>
//                             !selectedOfferId && isMobile() ? setIsTooltipOpen(true) : undefined
//                         }
//                         onMouseEnter={() => (!selectedOfferId ? setIsTooltipOpen(true) : undefined)}
//                         onMouseLeave={() =>
//                             !selectedOfferId ? setIsTooltipOpen(false) : undefined
//                         }>
//                         <Button
//                             variant="contained"
//                             disabled={!selectedOfferId}
//                             onClick={() => onClick()}>
//                             Weiter
//                         </Button>
//                     </span>
//                 </Tooltip>
//             </div>
//         </div>
//     );
// };
//
// Offers.displayName = 'Offers';
//
// export default Offers;
