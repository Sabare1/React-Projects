export default function Buttons(props){
    return(
        <input type="button" value={props.value} className={props.className} name={props.name} onClick={() => props.findWho(props.value)}></input>
    )
}