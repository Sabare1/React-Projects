import React from "react"
export default function Pad(props){

    const btnClassName = props.isOn ? "on" : undefined; 
    return(
        <button style={{backgroundColor : props.color}} className={btnClassName} onClick={() => props.toggle(props.id)}></button>
    )
}