import React, {useState, useEffect} from 'react'

function UseEffectHook4() {

    const [count, setCount] = useState(0)

    const tick = () => {
        //setCount(count + 1)
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        
        // - cleaning up by returning a function
        return () => {
            clearInterval(interval)
        } 
    }, [])

  return (
    <div>
        {count}
    </div>
  )
}

export default UseEffectHook4