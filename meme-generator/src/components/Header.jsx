import trollFace from "../assets/troll-face.png"

export default function Header(){
    return(
        <header>
            <img src={trollFace} alt={"troll face icon"}></img>
            <h1>Meme Generator</h1>
        </header>
    )
}