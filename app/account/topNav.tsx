import React from 'react'
import Link from 'next/link';
import styles from './topNav.module.css'
const topNav = () => {
  return (
    <div>
      <div className="navbar bg-indigo-200 text-primary-content">
        <div className="flex-1">
        <div className="avatar">
  <div className="w-24 rounded-full">
    <img src="sidnai.png" />
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
    </div>
  )
}

export default topNav