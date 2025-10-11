import { useState } from 'react'
import { nanoid } from 'nanoid'
import Header from './Header'
import OutputScreen from './OutputScreen'
import Buttons from './Buttons'
import '../App.css'


function App() {
  const [expression, setExpression] = useState([]);
  const [output, setOutput] = useState("");



  const btns = ["clear", "delete", ".", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "="]

  const findWho = (value) => {
    if(value === "delete"){
      const newExp = [...expression];
      newExp.pop();
      setExpression(newExp);
      setOutput("");
    }
    else if(value === "clear"){
      setExpression([]);
      setOutput("");
    }
    else if(value === "="){
      try{
        const exp = [...expression];
        const newop = eval(exp.join(''));
        setOutput(newop);
      }
      catch(error){
        setExpression([]);
        setOutput("Math Error");
      }
    }
    else{
      const newExp = [...expression];
      newExp.push(value);
      setExpression(newExp);
      setOutput("");
    }
  } 



  const btnEls = btns.map((btn) =>{
    const className = (btn === "0" || btn === "=") ? btn === "0" ? "zero" : "equal" : "";
    const nid = nanoid();
    return <Buttons id={nid} key={nid} value={btn} className={className} findWho={findWho}/>
  })
  


  return (
    <main className='main'>
      <Header/>
      <div className="calculator">
        <OutputScreen input={expression.join('')} output={output}/>
        <div className='btn-container'>
          {btnEls}
        </div>
      </div>
    </main>
  )
}

export default App
