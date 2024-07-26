import React from 'react'

function ChildParent(props) {
    
  return (
    <div>
        <button onClick={props.greetParent}>Child</button>
    </div>
  )
}

export default ChildParent