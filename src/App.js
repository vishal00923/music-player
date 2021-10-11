import React, { useRef, useState } from 'react';

import './styles/app.scss';

import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';

import chillHopData from './appdata';

import { playAudio } from './utility';

function App() {
    // State variables
    const [songs, setSongs] = useState(chillHopData());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        durationTime: 0,
        animatePercentage: 0,
        volume: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false);

    // To grab a Html Elements use Ref
    const audioRef = useRef(null);

    // Event Handlers
    const timeUpdateHandler = (e) => {
        const currTime = e.target.currentTime;
        const duraTime = e.target.duration;

        // Calculate percentage of completion
        const roundCurrTime = Math.round(currTime);
        const roundDuraTime = Math.round(duraTime);
        const animateProgressBar = Math.round((roundCurrTime / roundDuraTime) * 100);

        setSongInfo({
            ...songInfo,
            currentTime: currTime,
            durationTime: duraTime,
            animatePercentage: animateProgressBar,
            volume: e.target.volume,
        });
    };

    const songEndHandler = async () => {
        let currentIdx = songs.findIndex((song) => song.id === currentSong.id);

        await setCurrentSong(songs[(currentIdx + 1) % songs.length]);
        playAudio(isPlaying, audioRef);
        return;
    };

    return (
        <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <Song currentSong={currentSong} isPlaying={isPlaying} />
            <Player
                songs={songs}
                setSongs={setSongs}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
            />
            <Library songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} libraryStatus={libraryStatus} audioRef={audioRef} />

            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} onEnded={songEndHandler} src={currentSong.audio} ref={audioRef}></audio>
        </div>
    );
}

export default App;
