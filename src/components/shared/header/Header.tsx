import { motion, useAnimation } from 'framer-motion';
import './header.scss';
import { ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { RootState } from '../../../redux/store';
import { selectLogoById } from '../../../redux/gym/selectors';
import { GymContext } from '../../App';

interface HeaderProps {
    children?: ReactNode;
    onHeightChange: (height: number) => void;
}

const Header = ({ children, onHeightChange }: HeaderProps) => {
    const { gymInternalId } = useContext(GymContext);

    const [position, setPosition] = useState(0);

    const gymSelector = useCallback(
        (state: RootState) => selectLogoById(state, gymInternalId),
        [gymInternalId]
    );

    const logo = useAppSelector(gymSelector);

    const [isScrolled, setIsScrolled] = useState(false);

    const controls = useAnimation();

    const childrenRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);

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

    useEffect(() => {
        const { innerWidth } = window;

        if (logoRef.current) {
            const resizeObserver = new ResizeObserver((entries) => {
                if (entries && entries[0]) {
                    const observedWidth = entries[0].contentRect.width;
                    setPosition(innerWidth / 2 - observedWidth / 2);
                }
            });

            resizeObserver.observe(logoRef.current);

            return () => {
                resizeObserver.disconnect();
            };
        }

        return () => {};
    }, []);

    const logoVariants = useMemo(() => {
        return {
            small: { scale: 0.6, x: 0, y: 0 },
            large: { scale: 1, x: `${position}px`, y: 0 }
        };
    }, [position]);

    return (
        <div className="header">
            <motion.div
                className="header__header"
                animate={controls}
                initial={{ height: isScrolled ? 50 : 100 }}
                transition={{ type: 'tween' }}>
                {/*
                    <div className="header__header__menu">
                    <FontAwesomeIcon icon={faBars} size="2x" onClick={handleMenuClick}/>
        </div>
*/}
                <motion.div
                    className="header__header__logo"
                    variants={logoVariants}
                    initial="large"
                    animate={isScrolled ? 'small' : 'large'}
                    transition={{ type: 'tween' }}>
                    <img src={logo} alt="Logo" ref={logoRef} />
                </motion.div>
            </motion.div>
            <div ref={childrenRef}>{children}</div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
