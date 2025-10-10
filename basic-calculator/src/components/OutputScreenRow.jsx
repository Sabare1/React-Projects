export default function OutputScreenRow(){
    return (
        <>
            <div className="screen-row-input">
                <input name='input' type="text" readOnly></input>
            </div>
            <div className="screen-row-output">
                <input name='output' type="text" readOnly></input>
            </div>
        </>
    )
}