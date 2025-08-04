import './App.css'
import Joke from './components/Joke'
import jokesData from './jokesData'
function App() {
  const jokeJSX = jokesData.map(
    (joke)=> <Joke
    setup = {joke.setup}
    punch = {joke.punchline}
    ></Joke>
  )
  return (
    <>
      {jokeJSX}
    </>
  )
}

export default App
