import React, { useEffect, useState } from 'react'
import { getCookie } from '../../utils/cookie';
import User from '../user/User';
import AddMovie from './add-movie/AddMovie';
import MovieList from './movie-list/MovieList';

const Movie = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  useEffect(() => {
    fetch('https://sanath-movies-backend.herokuapp.com/user/me', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getCookie('auth_token')
      }
    }).then(response => response.json())
    .then(jsondata => {
      setFirstName(jsondata.data.user.first_name)
      setLastName(jsondata.data.user.last_name)
    })

    fetch('https://sanath-movies-backend.herokuapp.com/movie/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getCookie('auth_token')
      }
    }).then(response => response.json())
      .then(jsondata => {
        setMovies(jsondata.data);
      })
  }, []);

  const addMovieHandler = (newMovie) => {
    setMovies((oldMovies) => {
      return [newMovie, ...oldMovies ]
    })
  }

  const removeMovieHandler = (id) => {
    setMovies((oldMovies) => {
      return oldMovies.filter((oldMovie) => {
        return oldMovie.id != id
      })
    })
  }

  return (
    <div>
      <User firstName={firstName} lastName={lastName}></User>
      <AddMovie addMovieHandler={addMovieHandler} selectedMovie={selectedMovie}></AddMovie>
      <MovieList removeMovieHandler={removeMovieHandler} movies={movies}></MovieList>
    </div>
  )
}

export default Movie