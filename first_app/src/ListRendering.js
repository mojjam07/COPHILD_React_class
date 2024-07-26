import React from 'react'
import ListPerson from './ListPerson'

function ListRendering() {
    const names = ['Ali', 'Badu', 'Kudi']
    const persons = [{id:1, name:'Tayo', age:24, skill:'React'}, {id:2, name:'Shola', age:27, skill:'Django'}, {id:3, name:'Adeks', age:32, skill:'Fullstack'}, {id:4, name:'Tolu', age:35, skill:'Graphix'}]
    const personList = persons.map(person => <ListPerson key={person.id} person={person} />) 
  return (
    <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}

        {
            names.map((name, index) => <h2 key={index}>{index} {name}</h2> ) //you can also assign thiis to a variable and reference it in JSX
        }
        {personList}
    </div>
  )
}

export default ListRendering

// Using index as key is not a good practice except:
// i.e. key={index}
// 1 - The list items do not have a unique id
// 2 - The list is a static and will not change
// 3 - The list will never be reordered or filtered