import React, { useState } from 'react'
import { getCookie } from '../../../../utils/cookie';

const EditMovie = ({movie}) => {
  const d = new Date(movie.release_date).toISOString().slice(0, 10)

  const [name, setName] = useState(movie.name);
  const [genre, setGenre] = useState(movie.genre);
  const [rating, setRating] = useState(movie.rating);
  const [cast, setCast] = useState(movie.cast);
  const [releaseDate, setReleaseDate] = useState(d);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const genreChangeHandler = (event) => {
    setGenre(event.target.value);
  }

  const ratingChangeHandler = (event) => {
    setRating(event.target.value);
  }

  const castChangeHandler = (event) => {
    setCast(event.target.value);
  }

  const releaseDateChangeHandler = (event) => {
    setReleaseDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const movieData = { id: movie.id, name, genre, cast, rating, releaseDate};

    fetch('https://sanath-movies-backend.herokuapp.com/movie/', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getCookie('auth_token')
      },
      body: JSON.stringify(movieData)
    }).then(response => response.json())
    .then(jsondata => {
      window.location = '/movie'
    })
    clearForm();
  }

  const clearForm = () => {
    setName("");
    setGenre("");
    setCast("");
    setRating("");
    setReleaseDate("");
  }

  return (
    <div>
      {<form onSubmit={submitHandler}>
        <div className='new-movie__controls'>
          <div className='new-movie__control'>
            <label>Title</label>
            <input onChange={nameChangeHandler} value={name} type='text'></input>
          </div>
          <div className='new-movie__control'>
            <label>Genre</label>
            <input onChange={genreChangeHandler} value={genre} type='text'></input>
          </div>
          <div className='new-movie__control'>
            <label>Cast</label>
            <input onChange={castChangeHandler} value={cast} type='text'></input>
          </div>
          <div className='new-movie__control'>
            <label>Rating</label>
            <input onChange={ratingChangeHandler} value={rating} type='number' min="1" step="1"></input>
          </div>
          <div className='new-movie__control'>
            <label>Release Date</label>
            <input onChange={releaseDateChangeHandler} value={releaseDate} type='date' min="2019-01-01" max='2022-01-01'></input>
          </div>
        </div>

        <div style={{display: 'flex'}}>
          <div className='new-movie__actions'>
            <button >Cancel</button>
          </div>
          <div className='new-movie__actions'>
            <button type='submit'>Save</button>
          </div>
        </div>
      </form>}
    </div>
  )
}

export default EditMovie