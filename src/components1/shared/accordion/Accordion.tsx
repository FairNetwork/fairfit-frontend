import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import './accordion.scss';
import Icon from '../icon/Icon';

interface AccordionProps {
    children: ReactElement;
    id: number;
    expandedId?: number | boolean;
    setExpanded?: Dispatch<SetStateAction<number | false>>;
    title: string;
    isDefaultOpen?: boolean;
}

const Accordion = ({
    id,
    expandedId,
    setExpanded,
    title,
    children,
    isDefaultOpen
}: AccordionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(isDefaultOpen ?? false);

    useEffect(() => {
        if (expandedId) {
            setIsOpen(id === expandedId);
        }
    }, [expandedId, id]);

    return (
        <div className="accordion">
            <div
                className="accordion__head"
                onClick={() =>
                    setExpanded
                        ? setExpanded(isOpen ? false : id)
                        : setIsOpen((prevState) => !prevState)
                }>
                <div className="accordion__head__title">{title}</div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    initial={{ rotate: isDefaultOpen ? 180 : 0 }}
                    transition={{ type: 'tween' }}>
                    <Icon icon="bi-caret-down-fill" />
                </motion.div>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key={`accordion__${id}`}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}>
                        <div className="accordion__content">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

Accordion.displayName = 'Accordion';

export default Accordion;
