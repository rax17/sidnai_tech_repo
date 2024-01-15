import React from 'react'
import styles from './ProductCard.module.css'
const topNav = () => {
  return (
    <div>
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
    </div>
  )
}

export default topNav