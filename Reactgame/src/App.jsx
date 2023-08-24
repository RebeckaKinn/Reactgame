import { useState } from 'react'
import settings_logo from './assets/settings.png'
//import background from './assets/moving_cat.gif'
import './App.css'
import './index.css'

function App() {

  return (
    <>
    <div className='container'>
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
    </div>
    </>
  )
}

export default App

/* TODO

- ha en bakgrunn med bildet (bevegelse?)
- start-knapp for å komme til spillene
- settings ikon for meny (foreldrekontroll)

*/