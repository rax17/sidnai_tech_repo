
import React from 'react'

import TopNav from './topNav'


interface posts {
    userId: number,
    body: string
}

const accountDetails = async () => {

    const resp= await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: posts[]= await resp.json();
  return (
<>
<TopNav/>
<div> Account details....</div>
  <table  className='table-pin-cols, bg-clip-padding'>

    <thead>
      <tr>
     
        <th>userId</th>
        <th>body</th>
      </tr>
    </thead>
    <tbody>
    {posts.slice(1,5).map(post=>
      <tr>
        <th>{post.userId}</th>  <td>{post.body} </td>  
      </tr>
    )}
    </tbody>
  </table>

    </>
  )
}

export default accountDetails