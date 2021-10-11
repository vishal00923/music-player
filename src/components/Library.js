import React from 'react';

import LibrarySong from './LibrarySong';

function Library({ songs, setSongs, setCurrentSong, isPlaying, libraryStatus, audioRef }) {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        songs={songs}
                        setSongs={setSongs}
                        setCurrentSong={setCurrentSong}
                        cover={song.cover}
                        name={song.name}
                        artist={song.artist}
                        active={song.active}
                        id={song.id}
                        key={song.id}
                        isPlaying={isPlaying}
                        audioRef={audioRef}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library;
