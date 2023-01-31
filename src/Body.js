import React from 'react'
import './Body.css'

export default function Body() {
  return (
    <div className='body'>
        <div className='box'>
            <img className='logo' src='https://student.hitbullseye.com/assets/images/hitbullseye-logo.png' alt='logo'></img>
            <p className='para'>Guess The Word</p>

            <hr/>
        <div>
            <input className='in'></input>
            <input className='in'></input>
            <input className='in'></input>
            <input className='in'></input>
            <input className='in'></input>
        <p>Hint:</p>
        <p>Remaining Guesses:</p>
        <p>Wrong Letters:</p>
        </div>
        <button type='button' className='btn'>Reset Game</button>
        </div>
    </div>
  )
}
