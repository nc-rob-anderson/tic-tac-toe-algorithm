import refresh from "./assets/refresh.svg"

const ResetButton = ({setGrid, hasDrawn, setHasDrawn, hasWon, setHasWon, setIsGameInPlay, setIsCpuTurn, setIsCrossesTurn})=>{
    const handleClick = ()=>{
        setGrid(new Array(9).fill(null))
        setHasDrawn(false)
        setHasWon(false)
        setIsGameInPlay(false)
        setIsCpuTurn(false)
        setIsCrossesTurn(false)
    }
    return hasDrawn || hasWon? <button onClick={handleClick} className="select-button"><img src={refresh} className="svg-icon"/></button> : <button onClick={handleClick} className="select-button" style={{visibility: "hidden"}}><img src={refresh} className="svg-icon"/></button>
}

export default ResetButton