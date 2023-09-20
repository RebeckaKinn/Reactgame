//import React from "react"; 
//arrows
import blueLeft from '../assets/blue_left.png';
import blueRight from '../assets/blue_right.png';
import yellowLeft from '../assets/yellow_left.png';
import yellowRight from '../assets/yellow_right.png';
import whiteLeft from '../assets/white_left.png';
import whiteRight from '../assets/white_right.png';

//image array
import image1 from '../assets/tigern.jpg'
import image2 from '../assets/soppen.jpg'

import './slideGame.css';

const cards = [
  { src: image1 },

  { src: image2},

];

function slideGameHandling() {
  const randomIndex = () => {
    return Math.floor(Math.random() * cards.length);
  };

  const switchImage = () => {

  }

  return (
    <>
    <div className='slideGameBox'>
      <div>

          <img className="arrow" src={blueLeft} alt="blueLeft" />

        <img className="gameImg head" src={cards[randomIndex()].src} alt="head" />

          <img className="arrow" src={blueRight} alt="blueRight" />

      </div>

      <div>

          <img className="arrow" src={yellowLeft} alt="yellowLeft" />

        <img className="gameImg body" src={cards[randomIndex()].src} alt="body" />

          <img className="arrow" src={yellowRight} alt="yellowRight" />

      </div>

      <div>
       <img className="arrow" src={whiteLeft} alt="whiteLeft" />

        <img  className="gameImg bottom"src={cards[randomIndex()].src} alt="bottom" />

          <img className="arrow" src={whiteRight} alt="whiteRight" />

      </div>
    </div>
    </>
  );
}

export default slideGameHandling;