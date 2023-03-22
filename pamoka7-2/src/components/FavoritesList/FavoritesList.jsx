import React, { useContext } from 'react';
import { FavoritesContext } from '../../App';
import style from './FavoritesList.module.css';

export default function FavoritesList() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div>
      <h2 className={style.header}>Favorite Movies</h2>
      <div className={style.wrapper}>
        {favorites.map((movie) => {
          return (
            <div key={movie.id}>
              <h4>{movie.title}</h4>
              <img src={movie.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
