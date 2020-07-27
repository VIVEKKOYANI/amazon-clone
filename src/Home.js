import React from "react";
import Image from './image/Prime_Day_Banner.jpg'
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img
      className="home__image" 
      src={Image} 
      alt="banner"/>
    </div>
  );
}

export default Home;
