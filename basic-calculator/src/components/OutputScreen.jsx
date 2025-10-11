export default function OutputScreen(props){
    return(
    <>
        <div className="screen-row-input">
            <input name='input' type="text" value={props.input} readOnly></input>
        </div>
        <div className="screen-row-output">
            <input name='output' type="text" value={props.output} readOnly></input>
        </div>
    </>
    )
}