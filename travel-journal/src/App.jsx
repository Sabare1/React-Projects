import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App() {
  const entryInstances = data.map((place)=> <Entry
  img = {place.img}
  title = {place.title}
  country = {place.country}
  googleMapsLink = {place.googleMapsLink}
  dates = {place.dates}
  text = {place.text}
  ></Entry>)
  return (
    <div className='container'>
      <Header></Header>
      {entryInstances}
    </div>
  )
}

export default App
