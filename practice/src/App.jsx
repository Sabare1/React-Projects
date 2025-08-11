import padsData from "./pads"
import React from "react"
export default function App(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    const btnClr = props.darkMode ? "#222222" : "#cccccc";
    const[pads, setPads] = React.useState(padsData);
    const btnArr = pads.map((pad) => <button style= {{backgroundColor : btnClr}}key={pad.id}></button>)

    return (
        <main>
            <div className="pad-container">
                {btnArr}
            </div>
        </main>
    )
}
