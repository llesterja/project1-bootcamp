import React, {useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDisplay =(props)=>{
  return(
    <>
      {props.movies.map((movie,index)=>(
        <div className='col'>
          <img src={movie.Poster} alt='movie poster'></img>
        </div>
      ))}
    </>
  )
}

export default MovieDisplay;