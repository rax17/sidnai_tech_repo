import React from 'react'

interface user {
    id: number,
    name: string,
    email: string
}

const newUserPage = async () => {

    const resp= await fetch('https://jsonplaceholder.typicode.com/users');
    const users: user[]= await resp.json();
  return (
<>

  <table  className='table-pin-cols, bg-clip-padding'>

    <thead>
      <tr>
     
        <th>Id</th>
        <th>Name</th>
        <th>Email Color</th>
      </tr>
    </thead>
    <tbody>
    {users.map(user=>
      <tr>
        <th>{user.id}</th>  <td>{user.name} </td>   <td>{user.email} </td>
      </tr>
    )}
    </tbody>
  </table>



   
    </>
  )
}

export default newUserPage