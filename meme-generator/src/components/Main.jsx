import '../App.css'
import { useState, useEffect } from 'react'
export default function Main(){
    const[meme, setMeme] = useState([])
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(res => setMeme(res.data.memes))
    }, [])
    console.log(meme);
    function handleChange(event){
        const {value, name} = event.currentTarget;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <main className='main-container'>
            <div className='form-container'>
                <label htmlFor='top-text'>
                    Top text
                    <input 
                        id='top-text'
                        name='topText'
                        placeholder='one does not simply'
                        value={meme.topText}
                        onChange={handleChange}
                    ></input>
                </label>
                <label htmlFor='bottom-text'>
                    Bottom text
                    <input 
                        id='bottom-text'
                        name='bottomText'
                        placeholder='walk into mordor'
                        value={meme.bottomText}
                        onChange={handleChange}
                    ></input>
                </label>
                <button id='get-meme-btn'>Get a new meme image</button>
            </div>
            <div className='meme'>
                {meme.length !== 0 && <img src={meme[1].url} alt='generated-meme'></img>}
                <span className='top'>{meme.topText}</span>
                <span className='bottom'>{meme.bottomText}</span>
            </div>
        </main>
    )
}