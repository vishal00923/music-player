import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    // To grab a Html Elements use Ref
    const audioRef = useRef(null);

    // Event Handlers
    const playBtn = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const timeUpdate = (e) => {
        const currTime = e.target.currentTime;
        const duraTime = e.target.duration;
        setSongInfo({ ...songInfo, currentTime: currTime, durationTime: duraTime });
    };

    // Normal Functions
    const formatTime = (time) => {
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
    };

    // useSate variable
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        durationTime: null,
    });

    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input min={0} type="range" value={songInfo.currentTime} max={songInfo.durationTime} />
                <p>{formatTime(songInfo.durationTime)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back-btn" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playBtn} className="play-btn" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward-btn" size="2x" icon={faAngleRight} />
            </div>
            <audio onLoadedMetadata={timeUpdate} onTimeUpdate={timeUpdate} src={currentSong.audio} ref={audioRef}></audio>
        </div>
    );
};

export default Player;
