import React, { useEffect, useState } from 'react'
import { getCookie } from '../../../utils/cookie';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './MovieList.css'
import EditMovie from './edit-movie/EditMovie';
const MovieList = ({ movies, removeMovieHandler }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

  const deleteMovieHandler = (id) => {
    fetch('http://localhost:9000/movie/', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getCookie('auth_token')
      },
      body: JSON.stringify({ id })
    }).then(response => response.json())
      .then(jsondata => {
        removeMovieHandler(id);
      })
  }

  const openModal = (movie) => {
    setSelectedMovie(movie)
    setIsOpen(true);
  }

  return (
    <table className='movie-table'>
      <tr>
        <th>Name</th>
        <th>Rating</th>
        <th>Genre</th>
        <th>Cast</th>
        <th>Release Date</th>
        <th>Actions</th>
      </tr>
      {movies.map((movie) => {
        const d = new Date(movie.release_date);
        return (
          <tr key={movie.id}>
            <td>{movie.name}</td>
            <td>{movie.rating}</td>
            <td>{movie.genre}</td>
            <td>{movie.cast}</td>
            <td>{d.toDateString()}</td>
            <td>
              <span onClick={() => openModal(movie)}>Edit</span>
              <span onClick={() => deleteMovieHandler(movie.id)}>Delete</span>
            </td>
          </tr>
        )
      })}
      <Modal
        isOpen={modalIsOpen}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <EditMovie movie={selectedMovie}></EditMovie>
      </Modal>

    </table>
  )
}

export default MovieList