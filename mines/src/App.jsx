import { createContext, useState } from 'react'
import './App.css'
import { genBoard, randomInt } from './utils/utils.js'
import Board from './comps/Board/index'

export const GlobalContext = createContext();

function App() {
    const [XandY, setXandY] = useState({
        x: randomInt(3, 10),
        y: randomInt(3, 10)
    })
    const [board, setBoard] = useState(genBoard(XandY.x, XandY.y))

    return (
        <>
            <GlobalContext.Provider value={{ board, setBoard, XandY }}>
                <Board />
            </GlobalContext.Provider>
        </>
    )
}

export default App