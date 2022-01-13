import React from 'react';
//Styles
import './styles.css';
//Components
import Carousel from 'nuka-carousel';
//Navigation
import { Link } from "react-router-dom";

const slides = [
  <img  src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/d3f0722d62d1f2f74ca2893cb234e9e3.jpg" alt="1" />,
  <img  src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/2cd31539675f613b63255a0aac4c9408.jpg" alt="2" />  ,
  <img  src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/caedb46a6eb265dbe90c6f044fc49210.jpg" alt="3" />  ,
  <img  src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/41b28a11da13a0384a9b75f95244e8e8.jpg" alt="4" />  ,
  <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/5ec5d5702a083583b268f32dde14b419.jpg" alt="5" />   
];

const Home = () => {
  return (
    <>
      <h1>Novidades</h1>
      <Carousel 
        autoplay={true} 
        slideWidth="400px"
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>Anterior</button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>Próximo</button>
        )}
      >
      <img  src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/d3f0722d62d1f2f74ca2893cb234e9e3.jpg" alt="1" />
      <img  src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/2cd31539675f613b63255a0aac4c9408.jpg" alt="2" />
      <img  src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/caedb46a6eb265dbe90c6f044fc49210.jpg" alt="3" />
      <img  src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/41b28a11da13a0384a9b75f95244e8e8.jpg" alt="4" />
      <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/5ec5d5702a083583b268f32dde14b419.jpg" alt="5" />  
      </Carousel>
    </>
  );
};

export default Home;