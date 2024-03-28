import checkWinner from "../utils/checkWinner"
import checkDraw from "../utils/checkDraw"
import cpuMove from "../utils/cpuMove"

const Button = ({square, index, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon , hasDrawn, setHasDrawn})=>{
    const handleClick = () => {
    if(!hasWon && !hasDrawn && !(typeof square === 'string' || square instanceof String)){
            setGrid((oldGrid)=>{
                oldGrid[index] = "0"
                if (checkWinner(oldGrid, "X")){
                    setHasWon("X")
                }
                if (checkWinner(oldGrid, "0")){
                    setHasWon("0")
                } else if (checkDraw(grid)){
                    setHasDrawn(true)
                }
                  else {
                    cpuMove(oldGrid, isCrossesTurn, setHasWon)
                }
                return oldGrid
            })
            setIsCrossesTurn((isCrossesTurn) => !isCrossesTurn)
    }
    }
    return (<button onClick={handleClick}>{square}</button>)
}


export default Button