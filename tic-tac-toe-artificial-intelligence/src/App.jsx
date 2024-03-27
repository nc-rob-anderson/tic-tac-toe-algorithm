import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./Button.jsx"

function App() {
  const [grid, setGrid] = useState(new Array(9).fill(" "))
  const [isCrossesTurn, setIsCrossesTurn] = useState(true)

  return (
    <>
      <table>
        <tbody>
  <tr>
    <td><Button {...{ square: grid[0], index: 0, setGrid, setIsCrossesTurn, isCrossesTurn }}/></td>
    <td><Button {...{ square: grid[1], index: 1, setGrid, setIsCrossesTurn, isCrossesTurn }}/></td> 
    <td><Button {...{ square: grid[2], index: 2, setGrid, setIsCrossesTurn, isCrossesTurn }}/></td>
  </tr>
  <tr>
  <td><Button {...{ square: grid[3], index: 3, setGrid, setIsCrossesTurn, isCrossesTurn }}/></td>
  <td><Button {...{ square: grid[4], index: 4, setGrid, setIsCrossesTurn, isCrossesTurn }}/></td>
  <td><Button {...{ square: grid[5], index: 5, setGrid, setIsCrossesTurn, isCrossesTurn }}/></td>
  </tr>
  <tr>
  <td><Button {...{ square: grid[6], index: 6, setGrid, setIsCrossesTurn, isCrossesTurn }}/></td>
  <td><Button {...{ square: grid[7], index: 7, setGrid, setIsCrossesTurn, isCrossesTurn }}/></td>
  <td><Button {...{ square: grid[8], index: 8, setGrid, setIsCrossesTurn, isCrossesTurn }}/></td>
  </tr>
  </tbody>
</table>
    </>
  )
}

export default App
