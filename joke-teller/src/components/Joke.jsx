export default function Joke({setup="", punch}){
    return(
        <>
            <p>{setup}</p>
            <p>{punch}</p>
            <hr/>
        </>
    )
}