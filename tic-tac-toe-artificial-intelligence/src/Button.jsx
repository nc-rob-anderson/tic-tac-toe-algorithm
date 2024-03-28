import checkWinner from "../utils/checkWinner"

const Button = ({square, index, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon})=>{
    const handleClick = () => {
    if(!hasWon && !(typeof square === 'string' || square instanceof String)){
        console.log("hey?")
            setGrid((oldGrid)=>{
                oldGrid[index] = isCrossesTurn ? "0" : "X"
                if (checkWinner(oldGrid, "X")){
                    setHasWon("X")
                }
                if (checkWinner(oldGrid, "0")){
                    setHasWon("0")
                } 
                return oldGrid
            })
            setIsCrossesTurn((isCrossesTurn)=> !isCrossesTurn)
            console.log(grid, "before checkWinner")
        if (checkWinner(grid, "X")){
            console.log("X won")
        }
        if (checkWinner(grid, "0")){
            console.log("0 won")
        } 
    }
    }
    return (<button onClick={handleClick}>{square}</button>)
}


export default Button