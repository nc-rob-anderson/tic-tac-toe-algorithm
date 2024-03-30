import computer from "./assets/computer.svg"
import user from "./assets/user.svg"
import cpuFirstMove from "../utils/cpuFirstMove"

const SelectOrder = ({isCrossesTurn, isCpuTurn, setIsCpuTurn, isGameInPlay, setIsGameInPlay, setGrid}) =>{
    const handleClick = (isCpuTurn) => {
        if(!isGameInPlay && isCpuTurn){
            setIsCpuTurn(true)
            setIsGameInPlay(true)
            setGrid((oldGrid)=>{
             const newGrid = [...oldGrid]
             cpuFirstMove(newGrid, isCrossesTurn)
             return newGrid
            })
        }
    }
    return (<div className="select-button-container"><button onClick={()=>{handleClick(true)}} className={isGameInPlay? isCpuTurn? "selected-disabled-select-button" : "disabled-select-button" : "select-button" }><img src={computer} className="svg-icon"/></button><button onClick={()=>{handleClick(false)}} className={!isCpuTurn ? "selected-disabled-select-button" : isGameInPlay ?  "disabled-select-button" : "select-button"}><img src={user} className="svg-icon"/></button></div>)
}

export default SelectOrder