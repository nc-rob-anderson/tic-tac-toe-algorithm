const SelectPiece = ({isCrossesTurn, setIsCrossesTurn, isGameInPlay}) =>{
    const handleClick = (isCrossesTurn)=>{
        if(!isGameInPlay){
     setIsCrossesTurn(isCrossesTurn)
        }
    }
    return (<div className="select-button-container"><button className={isCrossesTurn? "selected-disabled-select-button" : isGameInPlay? "disabled-select-button" : "select-button"} onClick={()=>{handleClick(true)}}>X</button><button className={ !isCrossesTurn? "selected-disabled-select-button" : isGameInPlay ? "disabled-select-button" : "select-button"} onClick={()=>{handleClick(false)}}>0</button></div>)
}

export default SelectPiece