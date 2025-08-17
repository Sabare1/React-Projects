import React from "react"

export default function WindowTracker() {

    const[size, setSize] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function setWindowSize(){
            console.log("resized")
            setSize(window.innerWidth)
        }
        window.addEventListener("resize",setWindowSize)

        return () => window.removeEventListener("resize", setWindowSize)

    }, [])

    return (
        <h1>Window width: {size}</h1>
    )
}
