import React from "react"
import Header from "./Header"
import Body from "./Body"

const [userName, setUserName] = React.useState("Joe")

export default function App() {
    return (
        <main>
            <Header name={userName}/>
            <Body name={userName}/>
        </main>
    )
}
