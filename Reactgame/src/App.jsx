import { useState } from 'react'
import settings_logo from './assets/settings.png'
import './App.css'

function App() {

  return (
    <>
    <div>
      <img 
        className='logo'
        src={settings_logo}/>
      </div>

      <h1>velkommen</h1>
      <div className="card">
        <button>
          START
        </button>
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