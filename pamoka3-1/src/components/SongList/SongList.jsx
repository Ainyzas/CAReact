import React from 'react';
import style from './SongList.module.css';
import Song from '../Song/Song.jsx';

export default function SongList() {
  const songs = [
    {
      id: 1,
      title: 'Bohemian Rhapsody',
      artist: 'Queen',
      duration: '5:55',
    },
    {
      id: 2,
      title: 'Animal',
      artist: 'MISSIO',
      duration: '3:31',
    },
    {
      id: 3,
      title: 'West Coast',
      artist: 'Missio',
      duration: '4:11',
    },
    {
      id: 4,
      title: 'Lacrimosa',
      artist: 'Mozart',
      duration: '3:20',
    },
    {
      id: 5,
      title: 'Rob A Bank',
      artist: 'Confetti',
      duration: '2:51',
    },

    {
      id: 6,
      title: 'Bones',
      artist: 'Imagine Dragons',
      duration: '2:46',
    },
  ];
  return (
    <div className={style.container}>
      {songs.map((song) => {
        return <Song key={song.id} title={song.title} artist={song.artist} duration={song.duration} />;
      })}
    </div>
  );
}
