import checkWinner from "../utils/checkWinner"
import checkDraw from "../utils/checkDraw"
import cpuMove from "../utils/cpuMove"
import { useEffect } from "react"

const Button = ({square, index, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon , hasDrawn, setHasDrawn, setIsGameInPlay})=>{
    const handleClick = () => {
    if(!hasWon && !hasDrawn && !(typeof square === 'string' || square instanceof String)){
            setIsGameInPlay(true)
            setGrid((oldGrid)=>{
                const newGrid = [...oldGrid]
                newGrid[index] = isCrossesTurn ? "X" : "0"
                if (checkWinner(newGrid, "X")){
                    setHasWon("X")
                }
                if (checkWinner(newGrid, "0")){
                    setHasWon("0")
                } else if (checkDraw(newGrid)){
                    setHasDrawn(true)
                }
                  else {
                    cpuMove(newGrid, isCrossesTurn, setHasWon, setHasDrawn)
                }
                return newGrid
            })
              
    }
    }
    return (<button onClick={handleClick}>{square}</button>)
}


export default Button