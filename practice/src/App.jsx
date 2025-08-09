import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message" (singular)
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */
    const msgCnt = messages.length
    return (
        <div>
            {msgCnt === 0 ? <h1>You're all caught up!</h1> : <h1>You have {msgCnt} unread
     *   {msgCnt === 1 ? "message" : "messages"}</h1>}
        </div>
    )
}
