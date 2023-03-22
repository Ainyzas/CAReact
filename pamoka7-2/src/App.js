import React, { useState } from 'react';
import FavoritesList from './components/FavoritesList/FavoritesList';
import MovieList from './components/MovieList/MovieList';

export const FavoritesContext = React.createContext();

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <MovieList />
        <FavoritesList />
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
