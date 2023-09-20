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

//TODO: put images in different folders in assets
//TODO: bildene er ikke centrert

import './slideGame.css';

const cards = [
  { src: image1 },

  { src: image2 },

];


//TODO: Skjekk chatGPT i forhold til useState og update site. Alt fungerer, men ikke oppdatere siden. 


let headIndex;
let bodyIndex;
let bottomIndex;

function slideGameHandling() {

  const randomIndex = () => {
    return Math.floor(Math.random() * cards.length);
  };

  const getIndex = () => {
    headIndex = randomIndex()
    bodyIndex = randomIndex()
    bottomIndex = randomIndex()
  }
  getIndex();
  

  const switchImage = (direction, index) => {
    if(direction == 'left'){
      if(index == 0) index = cards.length - 1;
      else index--;
    }
    else{
      if(index == cards.length - 1) index = 0;
      else index++;
    }
    console.log(index)
    return;
  };



  return (
    <>
    <div className='slideGameBox'>
      <div>
        <img 
            onClick={() => switchImage('left', headIndex)}
            className="arrow" 
            src={blueLeft} 
            alt="blueLeft" />
          <img 
              className="gameImg head" 
              src={cards[headIndex].src} 
              alt="head" />
        <img 
            onClick={() => switchImage('right', headIndex)}
            className="arrow" 
            src={blueRight} 
            alt="blueRight" />
      </div>

      <div>
        <img 
            onClick={() => switchImage('left', bodyIndex)} 
            className="arrow" src={yellowLeft} 
            alt="yellowLeft" />
          <img 
              className="gameImg body" 
              src={cards[bodyIndex].src} 
              alt="body" />
        <img 
            onClick={() => switchImage('right', bodyIndex)} 
            className="arrow" src={yellowRight} 
            alt="yellowRight" />
      </div>

      <div>
       <img 
          onClick={() => switchImage('left', bottomIndex)} 
          className="arrow" src={whiteLeft} 
          alt="whiteLeft" />
          <img 
              className="gameImg bottom"
              src={cards[bottomIndex].src} 
              alt="bottom" />
        <img 
            onClick={() => switchImage('right', bottomIndex)} 
            className="arrow" src={whiteRight} 
            alt="whiteRight" />
      </div>
    </div>
    </>
  );
}

export default slideGameHandling;