import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'

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

function MainContent(){
  return(
    <main>
      <h1>Reasons for learning react</h1>
      <ol>
          <li>React is a popular library, so I will be able to
          fit in with all the coolest devs out there! 😎</li>
          <li>I am more likely to get a job as a front end developer
          if I know React</li>
      </ol>
    </main>
  )
}

function Footer(){
  return(
    <footer>© 2025 Vasan development. All rights reserved.</footer>
  )
}