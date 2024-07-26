import React from 'react'

const Destructuring = props => {

    const {name, hobby} = props

    return (
      <div>
          <h2>This is destructuring props that called {name} and {hobby}</h2>
      </div>
    )
}

// function Destructuring({name, hobby}) {
//   return (
//     <div>
//         <h2>This is destructuring props that called {name} and {hobby}</h2>
//     </div>
//   )
// }

export default Destructuring