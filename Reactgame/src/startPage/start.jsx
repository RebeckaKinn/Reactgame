
import settings_logo from '../assets/settings.png'
import '../index.css'
import '../App.css'

function Start(){

    return (
        <>
      <div>
        <img 
          className='settingsButton'
          src={settings_logo}/>
      </div>
      <div 
        className='startMenu'>
        <h1>velkommen</h1>
      </div>
      <div 
        className='startButton'>
        <button>
          START
        </button>
      </div>
        </>
    )
}

export default Start;

/* TODO

- ha en bakgrunn med bildet (bevegelse?)
- start-knapp for å komme til spillene
- settings ikon for meny (foreldrekontroll)

*/