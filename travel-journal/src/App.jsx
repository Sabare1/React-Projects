import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App() {
  const entryInstances = data.map((place)=> <Entry
  key = {place.id}
  entry = {place}
  ></Entry>)
  return (
    <div className='container'>
      <Header></Header>
      {entryInstances}
    </div>
  )
}

export default App
