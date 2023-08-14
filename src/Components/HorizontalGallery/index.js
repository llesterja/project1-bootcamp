import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const HorizontalGallery =(props)=>{

  const getMovieDetails = async(movieId)=>{
    try{
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?&api_key=76ea622ca12a2d949e9e760bca3806ac`
      );
      console.log("movie response:",movieResponse.data);
      props.setSelectedMovie(movieResponse.data);
    } catch(err){
      console.log(err);
    }
  };
  const getMovieCertification = async(movieId)=>{
    try{
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?&api_key=76ea622ca12a2d949e9e760bca3806ac`
      );
      console.log("movie response:",movieResponse.data);
      props.setSelectedMovie(movieResponse.data);
    } catch(err){
      console.log(err);
    }
  };
  const getMovieSimilar = async(movieId)=>{
    try{
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?&api_key=76ea622ca12a2d949e9e760bca3806ac`
      );
      console.log("movie response:",movieResponse.data);
      props.setSelectedMovie(movieResponse.data);
    } catch(err){
      console.log(err);
    }
  };

  const handleClick = (movie) =>{
    props.setModalShow(true);
    // props.setSelectedMovie(movie);
    getMovieDetails(movie.id);
  };

  return(
    <div className='row'>
      <div className='col'>
        <h1>{props.title}</h1>
      </div>
      <div className=" row flex-nowrap overflow-x-auto" >
        {props.movies.map((movie,index)=>(
        <div className='col d-flex justify-content-start m-3 ' >
          <img 
            src={'https://image.tmdb.org/t/p/w300'+movie.poster_path} 
            alt='movie poster'
            onClick={()=>handleClick(movie)}
          ></img>
        </div>
        ))}
      </div>      
    </div>
  )
}

export default HorizontalGallery;