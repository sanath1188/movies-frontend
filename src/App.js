import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes, Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Movie from './components/movie/Movie';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/movie" element={<Movie />} />
    </Routes>
  );
}

export default App;
