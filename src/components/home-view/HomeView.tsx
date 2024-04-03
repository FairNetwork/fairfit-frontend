import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../shared/header/Header';
import './homeView.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { loadAllGyms } from '../../redux/gym/actions';
import { selectGyms } from '../../redux/gym/selectors';
import { useNavigate } from 'react-router-dom';
import Search from './search/Search';

const HomeView = () => {
    const dispatch = useAppDispatch();

    const [headerHeight, setHeaderHeight] = useState(0);

    const gyms = useAppSelector(selectGyms);

    const navigate = useNavigate();

    useEffect(() => {
        void dispatch(loadAllGyms());
    }, [dispatch]);

    const handleHeaderHeightChange = (height: number) => {
        setHeaderHeight(height);
    };

    const handleGymClick = useCallback(
        (gymName: string) => {
            navigate(`/${gymName}`);
        },
        [navigate]
    );

    const content = useMemo(() => {
        const items: ReactElement[] = [];

        gyms.forEach(({ name }) => {
            items.push(
                <div
                    className="home-view__content__item"
                    key={`gym__${name}`}
                    onClick={() => handleGymClick(name.toLowerCase())}>
                    {name}
                </div>
            );
        });

        return items;
    }, [gyms, handleGymClick]);

    return (
        <div className="home-view">
            <Header isHomePage onHeightChange={handleHeaderHeightChange} />
            <motion.div animate={{ height: headerHeight }} />
            <div className="home-view__content">
                <h3 className="home-view__content__headline">
                    Finde das perfekte Studio in deine Nähe!
                </h3>
                <Search />
                {content}
            </div>
        </div>
    );
};

HomeView.displayName = 'HomeView';

export default HomeView;
