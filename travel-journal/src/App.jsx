import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header></Header>
      <Entry></Entry>
    </div>
  )
}

export default App
