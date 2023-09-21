import "react"; 
import { useState } from 'react';

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


function SlideGameHandling() {
  const randomIndex = () => {
    return Math.floor(Math.random() * cards.length);
  };

  const [headIndex, setHeadIndex] = useState(randomIndex());
  const [bodyIndex, setBodyIndex] = useState(randomIndex());
  const [bottomIndex, setBottomIndex] = useState(randomIndex());
  

  const switchImage = (direction, index, placement) => {
    if (direction === 'left') {
      index = (index - 1 + cards.length) % cards.length;
    } else {
      index = (index + 1) % cards.length;
    }
  
    if (placement === 'head') setHeadIndex(index);
    else if (placement === 'body') setBodyIndex(index);
    else setBottomIndex(index);
  };



  return (
    <>
    <div className='slideGameBox'>
      <div>
        <img 
            onClick={() => switchImage('left', headIndex, 'head')}
            className="arrow" 
            src={blueLeft} 
            alt="blueLeft" />
          <img 
              className="gameImg head" 
              src={cards[headIndex].src} 
              alt="head" />
        <img 
            onClick={() => switchImage('right', headIndex, 'head')}
            className="arrow" 
            src={blueRight} 
            alt="blueRight" />
      </div>

      <div>
        <img 
            onClick={() => switchImage('left', bodyIndex, 'body')} 
            className="arrow" src={yellowLeft} 
            alt="yellowLeft" />
          <img 
              className="gameImg body" 
              src={cards[bodyIndex].src} 
              alt="body" />
        <img 
            onClick={() => switchImage('right', bodyIndex, 'body')} 
            className="arrow" src={yellowRight} 
            alt="yellowRight" />
      </div>

      <div>
       <img 
          onClick={() => switchImage('left', bottomIndex, 'bottom')} 
          className="arrow" src={whiteLeft} 
          alt="whiteLeft" />
          <img 
              className="gameImg bottom"
              src={cards[bottomIndex].src} 
              alt="bottom" />
        <img 
            onClick={() => switchImage('right', bottomIndex, 'bottom')} 
            className="arrow" src={whiteRight} 
            alt="whiteRight" />
      </div>
    </div>
    </>
  );
}

export default SlideGameHandling;