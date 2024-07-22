import React from 'react'

function Click(props) {
    function onclick() {
        alert("Hello Mojjam")
        console.log("Hello Mojjam")
    }
  return (
    <div>
        <button style={{color:'white', backgroundColor: 'black',}} onClick={onclick}>{props.name}</button>
    </div>
  )
}

export default Click