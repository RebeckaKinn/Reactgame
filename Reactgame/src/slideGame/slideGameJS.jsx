//import { useState } from "react";
import BlueLeft from './src/assets/blue_left.png';
import BlueRight from './src/assets/blue_right.png';

import YellowLeft from './src/assets/yellow_left.png';
import YellowRight from './src/assets/yellow_right.png';

import WhiteLeft from './src/assets/white_left .png';
import WhiteRight from './src/assets/white_right.png';

const card = [{ head: "", body: "", bottom: "" }];

export function slideGameHandling() {

    const randomIndex = () => {
        return Math.random() * card.length - 1;
    }

    let app = /*HTML*/`

    <div>
        <div>
        <button> <img src="${BlueLeft}"> </button>
            <img src="${card[randomIndex()].head}">
        <button> <img src="${BlueRight}"> </button>
        </div>

        <div>
        <button> <img src="${YellowLeft}"> </button>
            <img src="${card[randomIndex()].body}">
        <button> <img src="${YellowRight}"> </button>
        </div>

        <div>
        <button> <img src="${WhiteLeft}"> </button>
            <img src="${card[randomIndex()].bottom}">
        <button> <img src="${WhiteRight}"> </button>
        </div>
    </div>

    `;
    return app;
//   const [card, setCards] = useState([]);
//   //shuffle images
//   const shuffleImg = () => {
//     const shuffledCards = [...card]
//       .sort(() => Math.random() - 0.5)
//       .map((img) => ({ ...img, id: Math.random() }));

//     setCards(shuffledCards);
//   };
  //test med for loop med dummy data
}

export default slideGameHandling;
