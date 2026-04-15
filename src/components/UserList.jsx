import React, { use } from 'react'

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Alice",
      age: 35
    },
    {
      id: 2,
      name: "Bob",
      age: 30
    },
    {
      id: 3,
      name: "Charlie",
      age: 22
    },
    {
      id: 4,
      name: "Klice",
      age: 25
    }
  ]

  return (
   
   <div>
    <main>
      {users.map(({id, name, age}) => (
        <ul key={id}>
          <li>Id: {id}</li>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
        </ul>
      ))}
    </main>
   </div>
   
  )
}

export default UserList