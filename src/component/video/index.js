import React, { useEffect, useState, useRef } from "react";
import './index.scss';

export default function VideoOveryLay() {
    const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    const [playing, setPlaying] = useState(false);
    const videoElement = useRef(null);

    const coverClicked = (e) => {
        setPlaying(!playing);
        if (videoElement.current) {
            videoElement.current.play();
        }
    }

    const onVideoPlaying = (e) => {
        setPlaying(true);
    }

    const onVideoPaused = (e) => {
        setTimeout(() => {
            if (videoElement.current && videoElement.current.paused) {
                setPlaying(false);
            }
        }, 500);
    }

    useEffect(() => {
        if (videoElement.current) {
            const video = videoElement.current;
            video.addEventListener('play', onVideoPlaying);
            video.addEventListener('pause', onVideoPaused);
        }
        return () => {
            if (videoElement.current) {
                videoElement.current.removeEventListener('play', onVideoPlaying);
                videoElement.current.removeEventListener('pause', onVideoPaused);
            }
        }
    });

    return (
        <div class="media-and-text">
            <div class="media-and-text__video-container">
                <video ref={videoElement} class="media-and-text__video" controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div onClick={coverClicked} className={`media-and-text__controller ${playing ? 'media-and-text__controller--hidden' : ''}`}>
                    <div class="media-and-text__play"></div>
                </div>
            </div>
        </div >
    )
}