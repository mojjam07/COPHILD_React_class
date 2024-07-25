import React from 'react';

function Joke(props) {
  return (
    <div>
        <h1 style={{color:'purple', backgroundColor: 'yellow'}}>question: {props.question}</h1>
        <h3 style={{color:'pink', backgroundColor: 'green'}}>Answer: {props.punchline}</h3>
    </div>
  )
}

export default Joke;