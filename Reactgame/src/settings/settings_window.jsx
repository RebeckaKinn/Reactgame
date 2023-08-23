import React from 'react';


const Settinggs = () => {

    function checkIfParent () {
        let parent = false;
        let number1 = Math.floor(Math.random() * 10);
        let number2 = Math.floor(Math.random() * 20); 
        let answer = number1 + number2; 
    
        const firewall = (
            <div>
              <div>
                <p>{number1}</p>
                <p> + </p>
                <p>{number2}</p>
              </div>
      
              <input 
                type="text" 
                value={userInput}/>
      
              <button onClick={() => checkAnswer(userInput, answer)}>aksept</button>
            </div>
          );
    
        return firewall;
    }

    function checkAnswer(userInput, answer) {
 
        if (parseInt(userInput) === answer) {

        } else {

        }
  }

  return <div>{checkIfParent()}</div>;

}

export default Settinggs;


