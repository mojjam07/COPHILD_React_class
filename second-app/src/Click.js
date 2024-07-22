import React from 'react'

function Click() {
    function onclick() {
        alert("Hello Mojjam")
        console.log("Hello Mojjam")
    }
  return (
    <div>
        <button style={{color:'white', backgroundColor: 'black',}} onClick={onclick}>click me</button>
    </div>
  )
}

export default Click