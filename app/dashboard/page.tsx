import React from 'react'

import styles from './layoutStyles.module.css'


const userDashboardPage = () => {
  return (
    <main > 


  <div className="navbar bg-red-300 text-primary-content">
  <div className="flex-1">
    
    <a className="btn btn-ghost text-xl text-pretty">Sidnai Advance Tech. </a>
  </div>

  <div className={styles.topnavCentered}>
    <h1 className=" text-xl text-pretty"> </h1>

  </div>
 
  <div className="flex-none">

    <ul className="menu menu-horizontal px-1">
    <li><a>About us</a></li>
      <li>
        <details>
          <summary>
            Student Id
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Dashboard</a></li>
            <li><a>Account</a></li>
            <li><a>Sign Out</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>

</div>
<hr></hr>
      <div className={styles.dashboard} >Welcome to your dashboard, Please continue learning..</div>

        <div className={styles.mainContainer}>
          <h1 className="font-bold" >  Course Description </h1>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th></th>
        <th></th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>

        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="./namste.png" alt="hindi"/></figure>
  <div className="card-body">
    <h2 className="card-title">Learn Hindi</h2>
    <p>Level 1</p>
    <p>Prepare your kids for Hindi language</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-primary">View Course</button>
    </div>
  </div>
</div>

         
          
       
        </td>
       
     
      </tr>
      {/* row 2 */}
      <tr>
      
        <td>


        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="singing.png" alt="hindi"/></figure>
  <div className="card-body">
    <h2 className="card-title">Learn Singing</h2>
    <p>Level 1</p>
    <p>Basic singing lessons for Kids</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-primary">View Course</button>
    </div>
  </div>
</div>



          
        </td>

       
      
      </tr>
      {/* row 3 */}
      <tr>
       
        <td>

        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="painting.png" alt="hindi"/></figure>
  <div className="card-body">
    <h2 className="card-title">Learn Painting</h2>
    <p>Level 1</p>
    <p>Basic painting lessons for Kids</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-primary">View Course</button>
    </div>
  </div>
</div>

         
        </td>
       
      
     
      </tr>
      {/* row 4 */}
      <tr>
        
        <td>


        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="guitarTeach.png" alt="hindi"/></figure>
  <div className="card-body">
    <h2 className="card-title">Learn Guitar</h2>
    <p>Level 1</p>
    <p>Basic Guitar lessons for Kids</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-primary">View Course</button>
    </div>
  </div>
</div>

         
        </td>
      
        
      
      </tr>
    </tbody>
    {/* foot */}
  
    
  </table>
</div>
        
        </div>

        <div className={styles.sideContainer}> 
        <h1 className="font-bold" >   Menu Items </h1>


        

      
        
        <div className="overflow-x-auto">
  <table className="table text-left">
    {/* head */}
    <thead>
      <tr>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
        <a className="link link-primary link-hover">Virtual Class room</a>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>

        <a className="link link-primary link-hover">Programme Calendar</a>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>

        <a className="link link-primary link-hover">Attendance Report</a>
        </th>
      </tr>
       {/* row 4 */}
       <tr>
        <th>

        <a className="link link-primary link-hover">Need Help?</a>
        </th>
      </tr>
       {/* row 5 */}
       <tr>
        <th>

        <a className="link link-primary link-hover">FAQ's</a>
        </th>
      </tr>
    </tbody>
  </table>
</div>
        
        </div>
        
    </main>
  )
}

export default userDashboardPage