import React from 'react'

function ListPerson({person}) {
  return (
    <div>
        <h2>
            I am {person.name}, I am {person.age} years old, I have {person.skill} skill.
        </h2>
    </div>
  )
}

export default ListPerson