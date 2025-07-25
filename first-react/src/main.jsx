import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './Navbar'

function DisplayApp(){
  return(
    <NavBar></NavBar>
  );
}
createRoot(document.getElementById('root')).render(
  <DisplayApp></DisplayApp>
)