import globeLogo from '../assets/globe.png'
import '../index.css'

export default function Header(){
    return(
        <header>
            <main className="main-container">
                <img src={globeLogo} alt="globe icon" id="globe-icon"></img>
                <span id="title-txt">my travel journal</span>
            </main>
        </header>
    )
}