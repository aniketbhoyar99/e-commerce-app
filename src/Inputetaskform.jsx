const Inputetaskfrom=(props)=>{
    return(
        <div className="taskform">
                <input type="text" onChange={props.newonChangeHandler} />
                <button onClick={props.newonClickHandler}>Add</button>
        </div>
    );
}
export default Inputetaskfrom;