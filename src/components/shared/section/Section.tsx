import React, { forwardRef, ReactNode } from 'react';
import './section.scss';

export type SectionProps = {
    className?: string;
    children: ReactNode;
    disableHover?: boolean;
};

// forwardRef erlaubt Zugriff auf das DOM-Element
const Section = forwardRef<HTMLDivElement, SectionProps>(
    ({ children, className = '', disableHover = false }, ref) => {
        return (
            <div
                ref={ref}
                className={`section ${disableHover ? 'section--no-hover' : ''} ${className}`}>
                {children}
            </div>
        );
    }
);

Section.displayName = 'Section';

export default Section;
