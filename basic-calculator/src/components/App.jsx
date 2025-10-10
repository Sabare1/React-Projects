import { useState } from 'react'
import { nanoid } from 'nanoid'
import Header from './Header'
import OutputScreen from './OutputScreen'
import Buttons from './Buttons'
import '../App.css'


function App() {
  const expression = useState([]);
  const btns = ["clear", "delete", ".", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "="]
  const btnEls = btns.map((btn) =>{
    const className = (btn === "0" || btn === "=") ? btn === "0" ? "zero" : "equal" : "";
    const nid = nanoid();
    return <Buttons id={nid} key={nid} value={btn} className={className}/>
  })
  
  const findWho = (id) => {
    btnEls.find(id)
  } 
  return (
    <main className='main'>
      <Header/>
      <div className="calculator">
        <OutputScreen/>
        <div className='btn-container'>
          {btnEls}
        </div>
      </div>
    </main>
  )
}

export default App
