import React, { useContext } from 'react';
import { FavoritesContext } from '../../App';
import Movie from '../Movie/Movie';
import style from '../SharedStyle/SharedStyle.module.css';

export default function MovieList() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const movies = [
    {
      id: 1,
      title: 'The Avengers',
      image:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      id: 2,
      title: 'Halloween',
      image:
        'https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    },
    {
      id: 3,
      title: 'All quiet on the western front',
      image:
        'https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 4,
      title: 'The Babadook',
      image: 'https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_FMjpg_UX1000_.jpg',
    },
  ];

  function addFavoritesHandler(index) {
    const newfavorites = [...favorites];
    newfavorites.push(movies[index]);
    setFavorites(newfavorites);
  }

  return (
    <>
      <h2 className={style.header}>Movies</h2>
      <div className={style.wrapper}>
        {movies.map((movie, index) => {
          return (
            <Movie
              key={movie.id}
              index={index}
              title={movie.title}
              image={movie.image}
              favorite={false}
              addFavoritesHandler={addFavoritesHandler}
            />
          );
        })}
      </div>
    </>
  );
}
