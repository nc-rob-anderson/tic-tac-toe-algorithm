const WinnerMsg = ({hasWon, hasDrawn})=>{
return hasWon ? <div>{hasWon} has won!</div> : hasDrawn ? <div>It's a draw 😐</div> :null
}

export default WinnerMsg