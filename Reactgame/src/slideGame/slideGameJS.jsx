import { useState } from 'react'

const card = [
    {head: "",
    body: "",
    bottom: ""},
];

function slideGameHandling(){
    const [card, setCards] = useState([])
//shuffle images
    const shuffleImg = () => {
        const shuffledCards = [...card]
            .sort(() => Math.random() - 0.5)
            .map((img ) => ({...img, id: Math.random() }))

        setCards(shuffledCards);
    }
    //test med for loop med dummy data
}

export default slideGameHandling;