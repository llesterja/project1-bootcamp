import React from 'react';
import {Modal} from "react-bootstrap";
import HorizontalGallery from '../HorizontalGallery';


const MovieDetails = (props) =>{

  return(
    <Modal 
        size="lg"
        fullscreen='md-down'
        show={props.modalShow}
        onHide={() => props.setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
    >
      {
      props.selectedMovie && props.similarMovie &&
      (
      <>
        <Modal.Header closeButton closeVariant='white'>
          <Modal.Title id="example-modal-sizes-title-lg">
              {props.selectedMovie?props.selectedMovie.title:"Somehow still null"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={'https://image.tmdb.org/t/p/w300'+props.selectedMovie.poster_path} alt='selected movie poster'/>
          <h3>{props.selectedMovie.title}</h3>
          <p>{props.selectedMovie.release_date} - {props.movieCertification} - {props.selectedMovie.runtime} mins</p>
          <p>{props.selectedMovie.genres.map((genre,id)=><>{genre.name} </>)} </p>
          <p>{Math.round(props.selectedMovie.vote_average)/2}/5</p>
          <p>{props.selectedMovie.overview}</p>
          <HorizontalGallery movies={props.similarMovie} size='w154' title='Similar Movies:'/>

        </Modal.Body>
      </>)}
  </Modal>
  );
};

export default MovieDetails;