import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import HorizontalGallery from "./Components/HorizontalGallery"
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import MovieDetails from "./Components/MovieDetailsDisplay";

function App() {
  const [movies, setMovies] = useState([
    // example titles to fix gallery
    // {
    //         "Title": "Star Wars: Episode IV - A New Hope",
    //         "Year": "1977",
    //         "imdbID": "tt0076759",
    //         "Type": "movie",
    //         "Poster": "https://image.tmdb.org/t/p/w300/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
    //     },
    //     {
    //         "Title": "Star Wars: Episode V - The Empire Strikes Back",
    //         "Year": "1980",
    //         "imdbID": "tt0080684",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Star Wars: Episode VI - Return of the Jedi",
    //         "Year": "1983",
    //         "imdbID": "tt0086190",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    //     }
      ]);
  const [searchValue,setSearchValue] = useState('');
  const [searchMovies,setSearchMovies]=useState([])
  const [modalShow,setModalShow]=useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  console.log("selected Movie:",selectedMovie)
  const getTrendingMovie = async () => {
    try{
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=76ea622ca12a2d949e9e760bca3806ac'
      );
      setMovies(response.data.results);
    } catch(err){
      console.log(err);
    }
  };

  const getSearchMovie = async()=>{
    try{
      const searchResponse = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1&api_key=76ea622ca12a2d949e9e760bca3806ac`
      );
      console.log(searchResponse);
      setSearchMovies(searchResponse.data.results);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getTrendingMovie();
    getSearchMovie(searchValue);
  },[searchValue])

  return (
    <div className=" container-fluid">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header title="Whatflix"/>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {searchValue?<HorizontalGallery title='Search Results' movies={searchMovies} setModalShow={setModalShow} setSelectedMovie={setSelectedMovie}/>:<></>}
      <HorizontalGallery title='Popular' movies={movies} setModalShow={setModalShow} setSelectedMovie={setSelectedMovie}/>
      <MovieDetails modalShow={modalShow} setModalShow={setModalShow} selectedMovie={selectedMovie} />
    </div>

    
  );
  
}

export default App;

