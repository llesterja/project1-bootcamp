import React, {useState,useEffect} from 'react';
import {Modal} from "react-bootstrap";
import axios from 'axios';

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
      props.selectedMovie &&
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
          <p>{props.selectedMovie.release_date}-{"call api to Release dates to add movie certification"}-{props.selectedMovie.runtime} mins</p>
          <p>{Math.round(props.selectedMovie.vote_average)/2}/5</p>
          <p>{props.selectedMovie.overview}</p>
          <p>{"api to Similar"}</p>
        </Modal.Body>
      </>)}
  </Modal>
  );
};

export default MovieDetails;