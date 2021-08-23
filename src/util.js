import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            id: uuidv4,
            cover: 'https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg',
            name: 'When I Get Up In the Morning...',
            artist: 'Middle School',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=22933',
            color: ['#2F414B', '#BB6647'],
            active: true,
        },
        {
            id: uuidv4,
            cover: 'https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg',
            name: 'Chit Chat',
            artist: 'Middle School',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=22934',
            color: ['#2F414B', '#BB6647'],
            active: false,
        },
        {
            id: uuidv4,
            cover: 'https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg',
            name: 'Same Old Circles',
            artist: 'Middle School',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=22935',
            color: ['#2F414B', '#BB6647'],
            active: false,
        },
        {
            id: uuidv4,
            cover: 'https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg',
            name: 'The Way We Were',
            artist: 'Middle School, Aviino',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=22936',
            color: ['#2F414B', '#BB6647'],
            active: false,
        },
        {
            id: uuidv4,
            cover: 'https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg',
            name: 'By The Window',
            artist: 'Middle School, Aso',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=22937',
            color: ['#2F414B', '#BB6647'],
            active: false,
        },
    ];
}

export default chillHop;
