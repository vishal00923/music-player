import React from 'react';

import { playAudio } from '../utility';

function LibrarySong({ songs, setSongs, setCurrentSong, cover, name, artist, active, id, isPlaying, audioRef }) {
    // Event Handlers
    const songSelectHandler = () => {
        const selectedSong = songs.filter((song) => song.id === id);
        setCurrentSong({ ...selectedSong[0] });

        // Add active song state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
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

        // Check if the song is playing
        playAudio(isPlaying, audioRef);
    };

    return (
        <div onClick={songSelectHandler} className={`library-song ${active ? 'selected' : ''}`}>
            <img src={cover} alt={name}></img>
            <div className="song-details">
                <h3>{name}</h3>
                <h4>{artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;
