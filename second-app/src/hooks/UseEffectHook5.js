import React, {useState, useEffect} from 'react'
import UseEffectHook from '../hooks/UseEffectHook'

function UseEffectHook5() {
    const [display, setDisplay] = useState(true)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    
    const mouseMoving = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoving)

        return () => {
            console.log('first')
        }
    }, [])


    return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle button</button>
        {display && <UseEffectHook />}
        X - {x} : {y} - Y
    </div>
  )
}

export default UseEffectHook5