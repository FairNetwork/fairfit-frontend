import { FC } from 'react';
import Icon from '../../icon/Icon';
import './videoControls.scss';
import VideoSlider from './video-slider/VideoSlider';

interface VideoControlsProps {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    ads?: { startTime: number }[];
    onTogglePlay: VoidFunction;
    onSeek: (time: number) => void;
}

const VideoControls: FC<VideoControlsProps> = ({
    isPlaying,
    currentTime,
    duration,
    ads,
    onTogglePlay,
    onSeek
}) => {
    return (
        <div className="video-controls">
            <Icon
                icon={isPlaying ? 'fas fa-pause' : 'fas fa-play'}
                onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();

                    onTogglePlay();
                }}
                color="white"
                size={20}
                style={{ width: 20 }}
            />
            <VideoSlider value={currentTime} max={duration} ads={ads} onChange={onSeek} />
        </div>
    );
};

VideoControls.displayName = 'VideoControls';

export default VideoControls;
