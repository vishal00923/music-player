import React, { useRef } from 'react';
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

    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back-btn" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playBtn} className="play-btn" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward-btn" size="2x" icon={faAngleRight} />
            </div>
            <audio src={currentSong.audio} ref={audioRef}></audio>
        </div>
    );
};

export default Player;
