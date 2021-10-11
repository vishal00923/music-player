import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight, faVolumeDown } from '@fortawesome/free-solid-svg-icons';

import { playAudio } from '../utility';

function Player({ songs, setSongs, songInfo, setSongInfo, isPlaying, setIsPlaying, currentSong, setCurrentSong, audioRef }) {
    // state variable
    const [activeVolume, setActiveVolume] = useState(false);

    // Update List
    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if (song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });

        setSongs(newSongs);
    };

    // Event Handlers
    const playBtnHandler = () => {
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

    const skipTrackHandler = async (direction) => {
        let currentIdx = songs.findIndex((song) => song.id === currentSong.id);

        // backward
        if (direction === 'skip-back-btn') {
            if (currentIdx === 0) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
            } else {
                await setCurrentSong(songs[currentIdx - 1]);
                activeLibraryHandler(songs[currentIdx - 1]);
            }
        } else {
            if (currentIdx === songs.length - 1) {
                await setCurrentSong(songs[0]);
                activeLibraryHandler(songs[0]);
            } else {
                await setCurrentSong(songs[currentIdx + 1]);
                activeLibraryHandler(songs[currentIdx + 1]);
            }
        }

        playAudio(isPlaying, audioRef);
    };

    const changeVolumeHandler = (e) => {
        let val = e.target.value;

        audioRef.current.volume = val;
        setSongInfo({ ...songInfo, volume: val });
    };

    // Normal Functions
    const formatTime = (time) => {
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
    };

    // Animation bar styles
    const animationBar = {
        transform: `translateX(${songInfo.animatePercentage}%)`,
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <div style={{ background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})` }} className="track">
                    <input onChange={dragHandler} min={0} max={songInfo.durationTime || 0} value={songInfo.currentTime} type="range" />
                    <div style={animationBar} className="animate-track"></div>
                </div>
                <p>{songInfo.durationTime ? formatTime(songInfo.durationTime) : '0:00'}</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back-btn')} className="skip-back-btn" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playBtnHandler} className="play-btn" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward-btn')} className="skip-forward-btn" size="2x" icon={faAngleRight} />
                <FontAwesomeIcon onClick={() => setActiveVolume(!activeVolume)} icon={faVolumeDown} />
                {activeVolume && <input onChange={changeVolumeHandler} min={0} max={1} step={0.01} value={songInfo.volume} type="range" />}
            </div>
        </div>
    );
}

export default Player;
