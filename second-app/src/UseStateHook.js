import React, { useState} from 'react'

function UseStateHook() {
    const [value, setValue] = useState(0)

    function increment (){
      setValue(value + 1)
    }

    // function decrement (){
    //   setValue(value - 1)
    // }
    //increment = () => setValue(value + 1) 

  return (
    <div>
        <h1>How many times have you been Hooked-up? {value}</h1>
        <button onClick={increment}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
    </div>
  )
}

export default UseStateHook