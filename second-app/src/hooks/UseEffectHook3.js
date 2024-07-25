import React, {useState, useEffect} from 'react'


function Mouse () {
    
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const mousePosition = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    
    // - conditional rendering by specifying second argument as an array
    useEffect(() => {
        console.log('mouse moved')
        window.addEventListener('mousemove', mousePosition)
    }, [])

  return (
    <div>
        
        <h3>Coordinate X - {x} and Y - {y}</h3>
    </div>
  )
}

export default Mouse