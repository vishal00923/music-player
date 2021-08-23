import React from 'react';

const Song = ({ currentSong, alt }) => {
    return (
        <div className="song-info">
            <img src={currentSong.cover} alt={alt.artist}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

export default Song;
