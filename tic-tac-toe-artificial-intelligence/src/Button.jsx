const Button = ({square, index, setGrid, setIsCrossesTurn, isCrossesTurn})=>{
    const handleClick = () => {
        if(square === " "){
            setGrid((oldGrid)=>{
                oldGrid[index] = isCrossesTurn ? "0" : "X"
                return oldGrid
            })
            setIsCrossesTurn((isCrossesTurn)=> !isCrossesTurn)
        }
    }
    return (<button onClick={handleClick}>{square}</button>)
}


export default Button