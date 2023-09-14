import './App.css';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import MovieList from './Components/movieLists/MovieList';
import Movie from './movieDetails/Movie';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="movie/:id" element={<Movie></Movie>}></Route>
        <Route path="movies/:type" element={<MovieList></MovieList>}></Route>
        <Route path='/*' element={<h1>Error Page</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
