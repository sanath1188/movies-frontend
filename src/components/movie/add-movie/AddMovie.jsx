import React from 'react'
import MovieForm from './MovieForm'
import './AddMovie.css'
import { getCookie } from '../../../utils/cookie'
const AddMovie = (props) => {
  const onSaveMovieData = (newMovie) => {
    fetch('http://localhost:9000/movie/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getCookie('auth_token')
      },
      body: JSON.stringify(newMovie)
    }).then(response => response.json())
    .then(jsondata => {
      props.addMovieHandler(jsondata.data);
    })
  }
 
  return (
    <div className='new-movie'>
      <MovieForm onSaveMovieData={onSaveMovieData}></MovieForm>
    </div>
  )
}

export default AddMovie