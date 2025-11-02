import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './contextMenu.scss';

export interface ContextMenuProps {
    children: ReactNode;
    position: { top?: number; left?: number; right?: number };
    open: boolean;
    onClose: () => void;
}

const ContextMenu: FC<ContextMenuProps> = ({ children, position, open, onClose }) => {
    const ref = useRef<HTMLDivElement>(null);

    // Klick außerhalb schließt das Menü
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClose();
            }
        };
        if (open) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    ref={ref}
                    className="context-menu"
                    style={{ top: position.top, left: position.left, right: position.right }}
                    initial={{ opacity: 0, scale: 0.8, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContextMenu;
