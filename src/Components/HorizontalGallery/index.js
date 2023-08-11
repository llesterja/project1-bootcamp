import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HorizontalGallery =(props)=>{

const handleClick = (movie) =>{
  props.setModalShow(true);
  props.setSelectedMovie(movie);
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
            onClick={handleClick(movie)}
          ></img>
        </div>
        ))}
      </div>      
    </div>
  )
}

export default HorizontalGallery;