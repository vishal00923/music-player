import React, { useState } from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import data from './util';

function App() {
    // State variables
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [alt, setAlt] = useState(songs[0]);
    return (
        <div className="App">
            <Song currentSong={currentSong} alt={alt} />
            <Player />
        </div>
    );
}

export default App;
