import React from 'react';

function Song({ currentSong, isPlaying }) {
    return (
        <div className="song-info">
            <img src={currentSong.cover} alt={currentSong.name} className={isPlaying ? 'rotateSong' : ''}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
}

export default Song;
