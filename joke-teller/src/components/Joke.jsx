export default function Joke({setup, punch, upVotes, downVotes, comments, isPun}){
    console.log(isPun);
    return(
        <>
            {setup && <p>Setup: {setup}</p>}
            <p>Punch: {punch}</p>
            <hr/>
        </>
    )
}