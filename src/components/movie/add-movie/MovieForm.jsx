import React, { useState } from 'react'
import './MovieForm.css'

const MovieForm = (props) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(1);
  const [cast, setCast] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

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

    const movieData = { name, genre, cast, rating, releaseDate};
    props.onSaveMovieData(movieData)
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
            <button type='submit'>{props.selectedMovie?'Edit': 'Add'} Movie</button>
          </div>
        </div>
      </form>}
    </div>
  )
}

export default MovieForm