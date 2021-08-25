import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ songs, currentSong, setCurrentSong, isPlaying, setIsPlaying, songInfo, setSongInfo, audioRef }) => {
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

    const skipTrackHandler = (direction) => {
        let currentIdx = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skip-back-btn') {
            if (currentIdx === 0) {
                setCurrentSong(songs[songs.length - 1]);
            } else {
                setCurrentSong(songs[currentIdx - 1]);
            }
        } else {
            if (currentIdx === songs.length - 1) {
                setCurrentSong(songs[0]);
            } else {
                setCurrentSong(songs[currentIdx + 1]);
            }
        }
    };

    // Normal Functions
    const formatTime = (time) => {
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input onChange={dragHandler} min={0} max={songInfo.durationTime || 0} value={songInfo.currentTime} type="range" />
                <p>{formatTime(songInfo.durationTime)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back-btn')} className="skip-back-btn" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playBtn} className="play-btn" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward-btn')} className="skip-forward-btn" size="2x" icon={faAngleRight} />
            </div>
        </div>
    );
};

export default Player;
