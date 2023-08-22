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
      const movieCertification = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=76ea622ca12a2d949e9e760bca3806ac`
      );
      // find based on sg country code, iso_3166 is international standard for country codes
      const sgMovieCert = movieCertification.data.results.find(cert => cert.iso_3166_1 === 'SG'||cert.iso_3166_1 === 'US');
      const finalMovieCert = sgMovieCert.release_dates.find(cert=>cert.certification!=="")
      // props.setMovieCertification(sgMovieCert.release_dates[0].certification); 
      props.setMovieCertification(finalMovieCert.certification); 
      
    } catch(err){
      console.log("err",err);
    }
  };
  const getMovieSimilar = async(movieId)=>{
    try{
      const similarMovieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?&api_key=76ea622ca12a2d949e9e760bca3806ac`
      );
      console.log("similar movie response:",similarMovieResponse.data.results);
      props.setSimilarMovie(similarMovieResponse.data.results);
    } catch(err){
      console.log(err);
    }
  };

  const handleClick = (movie) =>{
    props.setModalShow(true);
    console.log('test')
    // props.setSelectedMovie(movie);
    getMovieDetails(movie.id);
    getMovieCertification(movie.id);
    getMovieSimilar(movie.id);
  };

  return(
    <div className='row'>
      <div className='col'>
        {props.size?<h3>{props.title}</h3>:<h1>{props.title}</h1>}
      </div>
      <div className=" row flex-nowrap overflow-x-auto" >
        {props.movies.map((movie,index)=>(
        <div className='col d-flex justify-content-start m-3 ' >
          <img 
            src={`https://image.tmdb.org/t/p/${props.size?props.size:'w300'}${movie.poster_path}`} 
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