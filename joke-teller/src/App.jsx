import './App.css'
import Joke from './components/Joke'
function App() {

  return (
    <>
      <Joke
      setup="I got my daughter a fridge for her birthday."
      punch="I can't wait to see her face light up when she opens it."
      upvotes = {10}
      downvotes = {1}
      comments = {["funny", "loved it", "nice dad joke"]}
      isPun = {false}
      ></Joke>
      <Joke
      setup="How did the hacker escape the police?"
      punch="He just ransomware!"
      upvotes = {20}
      downvotes = {3}
      comments = {["a good one", "haha", "where did you learn these puns XD"]}
      isPun = {true}
      ></Joke>
      <Joke
      punch="It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
      upvotes = {12}
      downvotes = {0}
      comments = {["lmao", "lol", "haha very funny"]}
      isPun = {true}
      ></Joke>
      <Joke
      setup="Why do bees stay in the hive in the winter?"
      punch="Swarm."
      upvotes = {15}
      downvotes = {2}
      comments = {["nice swarm joke", "good pun", "lmao"]}
      isPun = {true}
      ></Joke>
      <Joke
      setup="What's the best thing about Switzerland?"
      punch="I don't know, but the flag is a big plus!"
      upvotes = {25}
      downvotes = {5}
      comments = {["hope this doesn't trigger switzerland bros", "nice", "lol"]}
      isPun = {false}
      ></Joke>
    </>
  )
}

export default App
