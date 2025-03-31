import { FC, useRef, MouseEvent as ReactMouseEvent } from 'react';
import './videoSlider.scss';

interface VideoSliderProps {
    value: number;
    max: number;
    ads?: { startTime: number }[];
    onChange: (value: number) => void;
}

const VideoSlider: FC<VideoSliderProps> = ({ value, max, ads = [], onChange }) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();

        if (!sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const newValue = Math.min(Math.max(0, event.clientX - rect.left), rect.width);
        onChange((newValue / rect.width) * max);
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = (event: ReactMouseEvent) => {
        handleMouseMove(event.nativeEvent as MouseEvent);

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className="video-slider" ref={sliderRef} onMouseDown={handleMouseDown}>
            <div className="video-slider__background"></div>
            {/* Werbung als gelbe Punkte */}
            {ads.map((ad, index) => (
                <div
                    key={index}
                    className="video-slider__ad-marker"
                    style={{ left: `${(ad.startTime / max) * 100}%` }}></div>
            ))}
            <div
                className="video-slider__progress"
                style={{ width: `${(value / max) * 100}%` }}></div>
        </div>
    );
};

VideoSlider.displayName = 'VideoSlider';

export default VideoSlider;
