import React from 'react'


// First Type
function Greet () {
    return <h1>Hello Mojjam</h1>
}

export default Greet

// Second Type : you can reference it with different name but the path must be correct
const SayHello = () => <h1>Hello Adekunle</h1>

// Third Type : you must reference it with the name and the path
export const Greetings = () => <h2>I am greeting you</h2>