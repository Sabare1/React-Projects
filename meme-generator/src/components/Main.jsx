import '../App.css'
import { useState } from 'react'
export default function Main(){
    const[meme, setMeme] = useState({
        imgUrl:'http://i.imgflip.com/1bij.jpg',
        topText: 'one does not simply',
        bottomText:'walk into mordor'
    })

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
                <img src={meme.imgUrl} alt='generated-meme'></img>
                <span className='top'>{meme.topText}</span>
                <span className='bottom'>{meme.bottomText}</span>
            </div>
        </main>
    )
}