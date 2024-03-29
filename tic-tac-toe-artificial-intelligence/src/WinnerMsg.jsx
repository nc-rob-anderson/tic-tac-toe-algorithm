const WinnerMsg = ({hasWon, hasDrawn})=>{
return hasWon ? <div>{hasWon} has won!</div> : hasDrawn ? <div>It's a draw 😐</div> : <div style={{visibility: "hidden"}}>It's a draw</div>
}

export default WinnerMsg