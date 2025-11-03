import './homeCards.scss';
import { useCallback, useMemo } from 'react';
import Card from '../../../components/shared/card-slider/card/Card';
import HomeCard from './home-card/HomeCard';
import { Gym } from '../../../types/gym';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { addHistoryEntry } from '../../../redux/gym/slice';
import { selectFilteredGyms } from '../../../redux/gym/selectors';

const HomeCards = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const gyms = useAppSelector(selectFilteredGyms);

    const handleButtonClick = useCallback(
        (id: Gym['id']) => {
            dispatch(addHistoryEntry(id));

            navigate(`/${id}`);
        },
        [dispatch, navigate]
    );

    const content = useMemo(() => {
        return gyms.map(({ id, name, type, image, address }) => {
            return <HomeCard key={id} name={name} type={type} location={address} image={image} />;
        });
    }, [gyms, handleButtonClick]);

    return <div className="home-cards">{content}</div>;
};

HomeCards.displayName = 'HomeCards';

export default HomeCards;
