import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { MovieContextProvider } from './components/MovieContext';
import { Route, Routes } from 'react-router-dom';
import Movie from './components/Movie';

function App() {
  return (
    <div className='bg-[#657f8e] h-auto'>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path = '/movie' Component={Movie}></Route>
      </Routes>
    </div>
  );
}

export default App;
