import { motion, useAnimation } from 'framer-motion';
import { ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { RootState } from '../../../redux/store';
import { selectLogoById } from '../../../redux/gym/selectors';
import { GymContext } from '../../App';
import appLogo from '../../../assets/fairfit_logo.png';
import './header.scss';
import Icon from '../icon/Icon';
import { MenuButton } from '../menu-button/MenuButton';

interface HeaderProps {
    children?: ReactNode;
    onHeightChange: (height: number) => void;
    isHomePage?: boolean;
    onMenuOpen?: () => void;
}

const Header = ({ children, onHeightChange, onMenuOpen, isHomePage = false }: HeaderProps) => {
    const { gymInternalId } = useContext(GymContext);

    const [isOpen, setIsOpen] = useState(false);

    const gymSelector = useCallback(
        (state: RootState) => selectLogoById(state, gymInternalId),
        [gymInternalId]
    );

    const gymLogo = useAppSelector(gymSelector);

    const logo = isHomePage ? appLogo : gymLogo;

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
            if (window.scrollY > 150) {
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
            void controls.start({ height: 50 });
        } else {
            void controls.start({ height: 100 });
        }
    }, [isScrolled, controls]);

    const logoVariants = useMemo(() => {
        return {
            small: { scale: 0.6, left: '20px', translateY: '-50%', translateX: '0%' },
            large: { scale: 1, left: '50%', translateY: '-50%', translateX: '-50%' }
        };
    }, []);

    return (
        <div className="header">
            <motion.div
                className="header__header"
                animate={controls}
                initial={{ height: isScrolled ? 50 : 100 }}
                transition={{ type: 'tween' }}>
                {!isHomePage && (
                    <div className="header__header__menu">
                        <Icon icon="bi-list" size={25} onClick={onMenuOpen} />
                    </div>
                )}
                <motion.img
                    src={logo}
                    alt="Logo"
                    className="header__header__logo"
                    transition={{ type: 'tween' }}
                    variants={logoVariants}
                    animate={isScrolled ? 'small' : 'large'}
                />
            </motion.div>
            <div ref={childrenRef}>{children}</div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
