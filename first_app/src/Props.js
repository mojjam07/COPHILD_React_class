import React from 'react'

function Props(props) {
  return (
    <div>
        <h1>This is how props called you: {props.name}</h1>
        {props.children}
    </div>
  )
}

export default Props