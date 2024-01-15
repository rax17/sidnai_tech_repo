
import React from 'react'

import styles from './layoutStyles.module.css'
import Link from 'next/link';
import Image from 'next/image';

const userDashboardPage = () => {
  return (
    <main >

      <div className="navbar bg-indigo-200 text-primary-content">
        <div className="flex-1">
        <div className="avatar">
  <div className="w-24 rounded-full">
   

    <Image
      src="/sidnai.png"
      width={500}
      height={500}
      alt="Picture of the sidnai"
    />

  </div></div>
          <a className="btn btn-ghost text-xl text-pretty" href="/dashboard">Sidnai Advance Tech. </a>
        </div>

        <div className={styles.topnavCentered}>
          <h1 className=" text-xl text-pretty"> </h1>
        </div>

        <div className="flex-none">

          <ul className="menu menu-horizontal px-1">
            <li>
            <Link href="/aboutus">About us</Link>
            </li>
            <li>
              <details>
                <summary>
                  Student Id
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  
                  </li>
                  <li>
                  <Link href="/account">Account</Link>
                    
                    </li>
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
        <h1 className="font-bold" >  Available Courses </h1>

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
                    <figure>
                    
                      
                      <Image
      src="/namste.png"
      width={500}
      height={500}
      alt="Picture of the hindi"
      className={styles.responsiveImg}
    />
                      
                      </figure>
                    <div className="card-body">
                      <h2 className="card-title">Learn Hindi</h2>
                      <p>Level 1</p>
                      <p>Prepare your kids for Hindi language</p>
                      <div className="card-actions justify-end">
                        <Link type="button" href="/course?type=hindi" 
                        className="btn btn-outline btn-primary">View Course</Link>
                      </div>
                    </div>
                  </div>

                </td>

              </tr>
              {/* row 2 */}
              <tr>

                <td>

                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                    
                       
                      <Image
      src="/singing.png"
      width={500}
      height={500}
      alt="Picture of the singing"
      className={styles.responsiveImg}
    />
                      
                      
                      </figure>
                    <div className="card-body">
                      <h2 className="card-title">Learn Singing</h2>
                      <p>Level 1</p>
                      <p>Basic singing lessons for Kids</p>
                      <div className="card-actions justify-end">
                      <Link type="button" href="/course?type=singing" className="btn btn-outline btn-primary">View Course</Link>
                      
                        
                      </div>
                    </div>
                  </div>

                </td>

              </tr>
              {/* row 3 */}
              <tr>

                <td>

                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                      
               
                      <Image
      src="/painting.png"
      width={500}
      height={500}
      alt="Picture of the painting"
      className={styles.responsiveImg}
    />
                      
                      </figure>
                    <div className="card-body">
                      <h2 className="card-title">Learn Painting</h2>
                      <p>Level 1</p>
                      <p>Basic painting lessons for Kids</p>
                      <div className="card-actions justify-end">
                      <Link type="button" href="/course?type=painting" className="btn btn-outline btn-primary">View Course</Link>
                      
                        
                      </div>
                    </div>
                  </div>

                </td>

              </tr>
              {/* row 4 */}
              <tr>

                <td>

                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                    <Image
      src="/guitarTeach.png"
      width={500}
      height={500}
      alt="Picture of the guitarTeach"
      className={styles.responsiveImg}
    />
                      </figure>
                    <div className="card-body">
                      <h2 className="card-title">Learn Guitar</h2>
                      <p>Level 1</p>
                      <p>Basic Guitar lessons for Kids</p>
                      <div className="card-actions justify-end">
                      <Link type="button" href="/course?type=guitar" className="btn btn-outline btn-primary">View Course</Link>
                      
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

                  <a className="link link-primary link-hover">FAQs</a>
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