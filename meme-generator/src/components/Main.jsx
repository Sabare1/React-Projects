import '../App.css'
import memeImg from '../assets/one-does-not-simply-meme.jpg'
export default function Main(){
    return(
        <main className='main-container'>
            <div className='form-container'>
                <label htmlFor='top-text'>
                    Top text
                    <input 
                        id='top-text'
                        placeholder='one does not simply'
                    ></input>
                </label>
                <label htmlFor='bottom-text'>
                    Bottom text
                    <input 
                        id='bottom-text'
                        placeholder='walk into mordor'
                    ></input>
                </label>
                <button id='get-meme-btn'>Get a new meme image</button>
            </div>
            <div className='meme'>
                <img src='http://i.imgflip.com/1bij.jpg' alt='generated-meme'></img>
                <span className='top'>one does not simply</span>
                <span className='bottom'>walk into mordor</span>
            </div>
        </main>
    )
}