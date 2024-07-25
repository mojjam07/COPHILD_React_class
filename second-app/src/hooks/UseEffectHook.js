import React, { useState, useEffect } from 'react'


function UseEffectHook() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('')

  useEffect(() => {
    console.log('Rendering useEffect')
    document.title = `You clicked ${count} times`

    return () => {
      console.log('Lets cleanup here')
    }
  })

  return (
    <div>
        <h1>UseEffectHook</h1>
        {/* <input type='text' value={name} onChange={e => setName(e.value.target)} /> */}
        <button onClick={() => setCount(count + 1)}>Counter {count} times</button>
    </div>
  )
}

export default UseEffectHook

// useEffect hook: This hook replaced the following in class components
// - componentDidMount
// - componentDidUpdate
// - componentWillUnmount


// Ways of which useEffect works
// - rendering
// - conditional rendering by specifying second argument as an array
// - rendering once by specifying second argument as an empty array
// - cleaning up by returning any function