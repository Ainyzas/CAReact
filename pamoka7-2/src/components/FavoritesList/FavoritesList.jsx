import React, { useContext } from 'react';
import { FavoritesContext } from '../../App';
import Movie from '../Movie/Movie';
import style from '../SharedStyle/SharedStyle.module.css';

export default function FavoritesList() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div>
      <h2 className={style.header}>Favorite Movies</h2>
      <div className={style.wrapper}>
        {favorites.map((movie) => {
          return <Movie key={movie.id} title={movie.title} image={movie.image} favorite={true} />;
        })}
      </div>
    </div>
  );
}
