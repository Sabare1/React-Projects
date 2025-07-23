import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

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
