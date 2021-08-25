import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo, audioRef }) => {
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

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };

    // Normal Functions
    const formatTime = (time) => {
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={songInfo.durationTime} value={songInfo.currentTime} type="range" />
                <p>{formatTime(songInfo.durationTime)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back-btn" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playBtn} className="play-btn" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward-btn" size="2x" icon={faAngleRight} />
            </div>
        </div>
    );
};

export default Player;
