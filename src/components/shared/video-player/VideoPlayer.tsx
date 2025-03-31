import { useRef, useState, useEffect, forwardRef, useImperativeHandle, MouseEvent } from 'react';
import './videoPlayer.scss';
import VideoControls from './video-controls/VideoControls';
interface VideoAd {
    startTime: number;
    src: string[];
}

interface VideoPlayerRef {
    play: VoidFunction;
    pause: VoidFunction;
    skip: (value: number) => void;
    setTime: (time: number) => void;
}

interface VideoPlayerProps {
    src: string;
    skip?: number;
    ads?: VideoAd[];
}

const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
    ({ src, skip = 10, ads = [] }, ref) => {
        const [shouldShowOverlay, setShouldShowOverlay] = useState(false);
        const [isPlaying, setIsPlaying] = useState(false);
        const [currentTime, setCurrentTime] = useState(0);
        const [duration, setDuration] = useState(0);
        const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);
        const [adPlaying, setAdPlaying] = useState<VideoAd | null>(null);
        const [adIndex, setAdIndex] = useState(0);

        const videoRef = useRef<HTMLVideoElement>(null);
        const overlayTimeout = useRef<NodeJS.Timeout | null>(null);

        const resetOverlayTimeout = () => {
            if (overlayTimeout.current) clearTimeout(overlayTimeout.current);
            overlayTimeout.current = setTimeout(() => setShouldShowOverlay(false), 3000);
        };

        const handleVideoClick = () => {
            if (clickTimeout) return;

            const timeout = setTimeout(() => {
                setShouldShowOverlay((prev) => !prev);
                resetOverlayTimeout();
                setClickTimeout(null);
            }, 200);

            setClickTimeout(timeout);
        };

        const handlePlay = () => {
            if (videoRef.current) {
                void videoRef.current.play();

                setIsPlaying(true);
            }
        };

        const handlePause = () => {
            if (videoRef.current) {
                videoRef.current.pause();

                setIsPlaying(false);
            }
        };

        const handleSeek = (time: number) => {
            if (videoRef.current) {
                videoRef.current.currentTime = time;
            }
        };

        const handleSkip = (value: number) => {
            if (videoRef.current) {
                videoRef.current.currentTime = Math.min(
                    Math.max(0, videoRef.current.currentTime + value),
                    duration
                );
            }
        };

        const handleTogglePlay = () => {
            if (isPlaying) {
                handlePause();
            } else {
                handlePlay();
            }
        };

        const handleDoubleClick = (event: MouseEvent) => {
            if (!videoRef.current) return;

            if (clickTimeout) {
                clearTimeout(clickTimeout);
                setClickTimeout(null);
            }

            const { clientX } = event;
            const { offsetWidth } = videoRef.current;
            const isLeftSide = clientX < offsetWidth / 2;

            if (isLeftSide) {
                handleSkip(skip * -1);
            } else {
                handleSkip(skip);
            }

            setShouldShowOverlay(true);
            resetOverlayTimeout();
        };

        useImperativeHandle(
            ref,
            () => ({
                play: handlePlay,
                pause: handlePause,
                skip: handleSkip,
                setTime: handleSeek
            }),
            []
        );

        useEffect(() => {
            const video = videoRef.current;

            if (!video) return;

            const updateTime = () => {
                setCurrentTime(video.currentTime);

                if (adPlaying && currentTime >= adPlaying.startTime + video.duration) {
                    setAdPlaying(null);
                }
            };
            const updateDuration = () => setDuration(video.duration);

            video.addEventListener('timeupdate', updateTime);
            video.addEventListener('loadedmetadata', updateDuration);

            return () => {
                video.removeEventListener('timeupdate', updateTime);
                video.removeEventListener('loadedmetadata', updateDuration);
            };
        }, [adPlaying, currentTime]);

        useEffect(() => {
            if (ads) {
                const ad = ads.find(
                    (ad) =>
                        ad.startTime <= currentTime && ad.startTime + ad.src.length >= currentTime
                );
                if (ad) {
                    setAdPlaying(ad);
                    setAdIndex(0);
                }
            }
        }, [currentTime, ads]);

        return (
            <div
                className="video-player"
                onClick={handleVideoClick}
                onDoubleClick={handleDoubleClick}>
                <video
                    src={adPlaying ? adPlaying.src[adIndex] : src}
                    ref={videoRef}
                    autoPlay={adPlaying !== null}
                />

                {shouldShowOverlay && (
                    <div className="video-player__overlay">
                        <div className="video-player__overlay__actions"></div>
                        <div className="video-player__overlay__controls">
                            <VideoControls
                                isPlaying={isPlaying && !adPlaying}
                                currentTime={currentTime}
                                duration={duration}
                                onTogglePlay={handleTogglePlay}
                                onSeek={handleSeek}
                                ads={ads}
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
