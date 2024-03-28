import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./Button.jsx"
import WinnerMsg from './WinnerMsg.jsx'

function App() {
  const [grid, setGrid] = useState(new Array(9).fill(null))
  const [isCrossesTurn, setIsCrossesTurn] = useState(false)
  const [hasWon, setHasWon] = useState(false)
  const [hasDrawn, setHasDrawn] = useState(false)
  console.log(hasDrawn)

  return (
    <>
      <table>
        <tbody>
  <tr>
    <td><Button {...{ square: grid[0], index: 0, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon, hasDrawn, setHasDrawn }}/></td>
    <td><Button {...{ square: grid[1], index: 1, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon, hasDrawn, setHasDrawn }}/></td> 
    <td><Button {...{ square: grid[2], index: 2, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon, hasDrawn, setHasDrawn}}/></td>
  </tr>
  <tr>
  <td><Button {...{ square: grid[3], index: 3, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon, hasDrawn, setHasDrawn }}/></td>
  <td><Button {...{ square: grid[4], index: 4, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon, hasDrawn, setHasDrawn }}/></td>
  <td><Button {...{ square: grid[5], index: 5, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon, hasDrawn, setHasDrawn }}/></td>
  </tr>
  <tr>
  <td><Button {...{ square: grid[6], index: 6, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon, hasDrawn, setHasDrawn }}/></td>
  <td><Button {...{ square: grid[7], index: 7, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon, hasDrawn, setHasDrawn }}/></td>
  <td><Button {...{ square: grid[8], index: 8, grid, setGrid, setIsCrossesTurn, isCrossesTurn, hasWon, setHasWon, hasDrawn, setHasDrawn }}/></td>
  </tr>
  </tbody>
</table>
<WinnerMsg {...{hasWon, hasDrawn}}/>
    </>
  )
}

export default App

