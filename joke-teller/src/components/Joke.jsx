import React from 'react'

export default function Joke({setup, punch, upVotes, downVotes, comments, isPun}){
    const[isShown, setIsShown] = React.useState(false)
    let punchState = isShown ? "hide" : "show";
    if(!isShown){
        punch = "";
    }
    function changeVisibility(){
        setIsShown((prevIsShown) => !prevIsShown)
    }

    return(
        <>
            {setup && <p>Setup: {setup}</p>}
            {punch && <p>Punch: {punch}</p>}
            <button id='showPunch' onClick={changeVisibility}>{punchState} punch</button>
            <hr/>
        </>
    )
}