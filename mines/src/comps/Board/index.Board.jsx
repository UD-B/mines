import { useContext } from 'react'
import { GlobalContext } from '../../App'
import "./style.css"

const Board = () => {
    const { board, XandY } = useContext(GlobalContext)

    return (
        <section className='board' style={{ gridTemplateRows: `repeat(${XandY.x}, 1fr)`, gridTemplateColumns: `repeat(${XandY.y}, 1fr)` }}>
            {board.map((v, i) => (
                <div key={i} className={v.class}>
                    {/* {v.text} */}
                    {i}
                </div>
            ))}
        </section>
    )
}

export default Board