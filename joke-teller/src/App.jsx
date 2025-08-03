import './App.css'
import Joke from './components/Joke'
function App() {

  return (
    <>
      <Joke
      setup="I got my daughter a fridge for her birthday."
      punch="I can't wait to see her face light up when she opens it."
      ></Joke>
      <Joke
      setup="How did the hacker escape the police?"
      punch="He just ransomware!"
      ></Joke>
      <Joke
      punch="It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
      ></Joke>
      <Joke
      setup="Why do bees stay in the hive in the winter?"
      punch="Swarm."
      ></Joke>
      <Joke
      setup="What's the best thing about Switzerland?"
      punch="I don't know, but the flag is a big plus!"
      ></Joke>
    </>
  )
}

export default App
