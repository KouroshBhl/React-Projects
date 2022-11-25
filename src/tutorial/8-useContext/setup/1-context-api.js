import React, { useState, useContext, createContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)
const contextAPI = createContext() // provider, consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <contextAPI.Provider value={{ removePerson }}>
      <h3>prop drilling</h3>
      <List people={people} />
    </contextAPI.Provider>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(contextAPI)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
