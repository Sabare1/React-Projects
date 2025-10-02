import { useState } from 'react'
import Header from './Header'
import OutputScreen from './OutputScreen'
import Buttons from './Buttons'
import '../App.css'

function App() {
  const keys = ["clear", "delete", ".", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "="]
  const btnEls = keys.map((key) =>{
    const className = (key === "0" || key === "=") ? key === "0" ? "zero" : "equal" : "";
    return <Buttons value={key} className={className}/>
  })
  return (
    <main className='main'>
      <Header/>
      <OutputScreen/>
      <div className='btn-container'>
        {btnEls}
      </div>
    </main>
  )
}

export default App
