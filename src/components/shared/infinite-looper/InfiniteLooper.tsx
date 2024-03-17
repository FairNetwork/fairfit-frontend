import { MouseEventHandler, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import './infiniteLooper.scss';

interface InfiniteLooperProps {
    speed: number;
    direction: 'right' | 'left';
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const InfiniteLooper = ({ children, direction, speed, onClick }: InfiniteLooperProps) => {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth } = outerRef.current.getBoundingClientRect();

        const instanceWidth = width / innerRef.current.children.length;

        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
        }
    }, [looperInstances]);

    useEffect(() => {
        setupInstances();
    }, [setupInstances]);

    return (
        <div className="infinite-looper" ref={outerRef} onClick={onClick}>
            <div className="infinite-looper__inner-list" ref={innerRef}>
                {[...Array(looperInstances)].map((_, ind) => (
                    <div
                        key={ind}
                        className="infinite-looper__inner-list__list-instance"
                        style={{
                            animationDuration: `${speed}s`,
                            animationDirection: direction === 'right' ? 'reverse' : 'normal'
                        }}>
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
};

InfiniteLooper.displayName = 'InfiniteLooper';

export default InfiniteLooper;
