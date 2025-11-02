import React, { useState, useRef, useCallback, useLayoutEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import './navigation.scss';
import Section from '../section/Section';
import Logo from '../logo/Logo';
import logo from '../../../assets/fairfit_logo.png';
import User from './user/User';

const NAV_ITEMS = ['Dashboard', 'Socials', 'Einstellungen'];

interface NavigationProps {
    onSelect?: (selected: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSelect }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);
    const x = useMotionValue(0);

    const handleSelect = useCallback(
        (index: number) => {
            setActiveIndex(index);
            onSelect?.(NAV_ITEMS[index]);
        },
        [onSelect]
    );

    // Set refs dynamically
    const setItemRef = (el: HTMLDivElement | null, index: number) => {
        if (el) itemRefs.current[index] = el;
    };

    const [positions, setPositions] = useState<{ left: number; width: number }[]>([]);

    useLayoutEffect(() => {
        const newPositions = itemRefs.current.map((el) => ({
            left: el.offsetLeft,
            width: el.offsetWidth
        }));
        setPositions(newPositions);
    }, [NAV_ITEMS.length]);

    // When released after drag → snap to closest item
    const handleDragEnd = () => {
        if (!containerRef.current || positions.length === 0) return;
        const containerLeft = containerRef.current.getBoundingClientRect().left;
        const dragX = x.get() + positions[activeIndex]?.left + positions[activeIndex]?.width / 2;

        const distances = positions.map((pos) => Math.abs(dragX - (pos.left + pos.width / 2)));
        const closestIndex = distances.indexOf(Math.min(...distances));
        handleSelect(closestIndex);
    };

    return (
        <div className="navigation">
            <div className="navigation__left">
                <Logo src={logo} />
            </div>

            <Section className="navigation__center" ref={containerRef} disableHover>
                {NAV_ITEMS.map((item, index) => (
                    <div
                        key={item}
                        ref={(el) => setItemRef(el, index)}
                        className={`navigation__center__item ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleSelect(index)}>
                        {item}
                    </div>
                ))}

                {positions[activeIndex] && (
                    <motion.div
                        className="navigation__center__active"
                        layout
                        drag="x"
                        style={{ x, y: '-50%' }}
                        dragConstraints={containerRef}
                        dragElastic={0.2}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        onDragEnd={handleDragEnd}
                        animate={{
                            left: positions[activeIndex].left,
                            width: positions[activeIndex].width
                        }}
                    />
                )}
            </Section>

            <div className="navigation__right">
                <User />
            </div>
        </div>
    );
};

Navigation.displayName = 'Navigation';

export default Navigation;
