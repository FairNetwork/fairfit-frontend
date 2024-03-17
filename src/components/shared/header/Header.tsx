import { motion, useAnimation } from 'framer-motion';
import './header.scss';
import { ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../../hooks/redux';
import { RootState } from '../../../redux/store';
import { selectLogoById } from '../../../redux/gym/selectors';
import { GymContext } from '../../App';

interface HeaderProps {
    children?: ReactNode;
    onHeightChange: (height: number) => void;
}

const Header = ({ children, onHeightChange }: HeaderProps) => {
    const { gymId } = useContext(GymContext);

    const gymSelector = useCallback((state: RootState) => selectLogoById(state, gymId), [gymId]);

    const logo = useAppSelector(gymSelector);

    const [isScrolled, setIsScrolled] = useState(false);

    const controls = useAnimation();

    const childrenRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (childrenRef.current) {
            onHeightChange(childrenRef.current.offsetHeight + 100);
        }
    }, [onHeightChange]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);

                if (childrenRef.current) {
                    onHeightChange(50 + childrenRef.current.offsetHeight);
                } else {
                    onHeightChange(50);
                }
            } else {
                setIsScrolled(false);

                if (childrenRef.current) {
                    onHeightChange(100 + childrenRef.current.offsetHeight);
                } else {
                    onHeightChange(100);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onHeightChange]);

    useEffect(() => {
        if (isScrolled) {
            controls.start({ height: 50 });
        } else {
            controls.start({ height: 100 });
        }
    }, [isScrolled, controls]);

    const logoVariants = {
        small: { scale: 0.6, x: '-160%', y: '-50%' },
        large: { scale: 1, x: '-50%', y: '-50%' }
    };

    const handleMenuClick = () => {};

    return (
        <div className="header">
            <motion.div
                className="header__header"
                animate={controls}
                initial={{ height: isScrolled ? 50 : 100 }}
                transition={{ type: 'tween' }}>
                <div className="header__header__menu">
                    <FontAwesomeIcon icon={faBars} size="2x" onClick={handleMenuClick} />
                </div>
                <motion.div
                    className="header__header__logo"
                    variants={logoVariants}
                    initial="large"
                    animate={isScrolled ? 'small' : 'large'}
                    transition={{ type: 'tween' }}>
                    <img src={logo} alt="Logo" />
                </motion.div>
            </motion.div>
            <div ref={childrenRef}>{children}</div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
