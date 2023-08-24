import React, {createContext, useState} from 'react';

const MoviesCards = createContext();

const MovieContext = ({children}) => {
  const [seats, setSeats] = useState([]);

  return (
    <MoviesCards.Provider value={{seats, setSeats}}>
      {children}
    </MoviesCards.Provider>
  );
};

export {MoviesCards, MovieContext};
