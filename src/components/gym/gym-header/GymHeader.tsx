import './gymHeader.scss';
import Header from '../../shared/header/Header';
import GymMenu from '../../shared/gym-menu/GymMenu';
import { useAppSelector } from '../../../hooks/redux';
import { selectGymName } from '../../../redux/gym/selectors';
import { GYM_MENU_ITEMS } from '../../../constants/menu';

const GymHeader = () => {
    // const hasOffers = useAppSelector(selectHasOffers);
    // const gymInternalId = useAppSelector(selectCurrentGymId);
    const gymName = useAppSelector(selectGymName);

    // const navigate = useNavigate();

    return (
        <div className="gym-header">
            <Header>
                <>
                    {/*{hasOffers && (*/}
                    {/*    <div className="gym-header__offer-slider">*/}
                    {/*        <InfiniteLooper*/}
                    {/*            direction="left"*/}
                    {/*            speed={1}*/}
                    {/*            onClick={() => navigate(`/${gymInternalId}/offers`)}>*/}
                    {/*            <OfferSlider />*/}
                    {/*        </InfiniteLooper>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    <div className="gym-header__content">
                        <h1 className="gym-header__content__title">{gymName}</h1>
                        <GymMenu items={GYM_MENU_ITEMS} />
                    </div>
                </>
            </Header>
        </div>
    );
};

GymHeader.displayName = 'GymHeader';

export default GymHeader;
