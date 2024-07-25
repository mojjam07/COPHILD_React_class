import React, { useState, useEffect } from 'react'

function UseEffectHook2() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('')



  useEffect(() => {
    console.log('Conditionally Rendering effect')
    document.title = `You clicked ${count} times`  
  }, [count])

  

  return (
    <div>
        {/* <input type='text' value={name} onChange={e => setName(e.value.target)} /> */}
        <button onClick={() => setCount(count + 1)}>Counter {count} times</button>
    </div>
  )
}

export default UseEffectHook2