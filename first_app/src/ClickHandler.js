import React from 'react'

function ClickHandler() {
    const clickHandler = () =>{
        alert('button clicked')
    }

  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default ClickHandler