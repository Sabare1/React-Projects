import React from "react"
export default function Pad(props){

    const [on, setOn] = React.useState(props.isOn);
    const btnClassName = on ? "on" : undefined; 
    function toggleBtn(){
        setOn((on) => !on);
    }
    return(
        <button style={{backgroundColor : props.color}} className={btnClassName} onClick={toggleBtn}></button>
    )
}