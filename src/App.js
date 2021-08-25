import React, { useRef, useState } from 'react';

import './styles/app.scss';

import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';

import data from './util';

function App() {
    // State variables
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        durationTime: 0,
    });

    // To grab a Html Elements use Ref
    const audioRef = useRef(null);

    // Event Handlers
    const timeUpdate = (e) => {
        const currTime = e.target.currentTime;
        const duraTime = e.target.duration;
        setSongInfo({ ...songInfo, currentTime: currTime, durationTime: duraTime });
    };

    return (
        <div className="App">
            <Song currentSong={currentSong} />
            <Player songInfo={songInfo} setSongInfo={setSongInfo} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} audioRef={audioRef} />
            <Library isPlaying={isPlaying} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} />
            <audio onLoadedMetadata={timeUpdate} onTimeUpdate={timeUpdate} src={currentSong.audio} ref={audioRef}></audio>
        </div>
    );
}

export default App;
