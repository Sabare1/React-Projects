import { createRoot } from 'react-dom/client'
import './index.css'
import reactLogo from './assets/react.svg'

createRoot(document.getElementById('root')).render(
  <ReasonForReact></ReasonForReact>
)

function ReasonForReact(){
  return(
    <>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </>
  )
}

function Header(){
  return(
    <>
      <header>
        <img src={reactLogo} width="40px"alt="react logo"></img>
      </header>
    </>
  )
}

function MainContent(){
  return(
    <>
      <h1>Reasons for learning react</h1>
        <ol>
            <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
        </ol>
    </>
  )
}

function Footer(){
  return(
    <footer>© 2025 Vasan development. All rights reserved.</footer>
  )
}