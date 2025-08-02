import globeLogo from '../assets/globe.png'
import '../index.css'

export default function Header(){
    return(
        <header>
            <img src={globeLogo} alt="globe icon" id="globe-icon"></img>
            <h1 id="title-txt">my travel journal</h1>
        </header>
    )
}