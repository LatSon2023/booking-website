import React from 'react'
import styles from './Navbar.module.css'
import NavbarItem from './NavbarItem'

function Navbar() {
  const listOptions = [
    {
      "type": "Stays",
      "icon": "fa-bed",
      "active": true
    },
    {
      "type": "Flights",
      "icon": "fa-plane",
      "active": false
    },
    {
      "type": "Car rentals",
      "icon": "fa-car",
      "active": false
    },
    {
      "type": "Attractions",
      "icon": "fa-bed",
      "active": false
    },
    {
      "type": "Airport taxis",
      "icon": "fa-taxi",
      "active": false
    }
  ]

  return (
    <nav className={styles['wrap-nav']}>
      <div className={styles.nav}>
        <div className={styles.options}>
          <span>Booking Website</span>
          <div className={styles.button}>
            <button className={styles.register}>Register</button>
            <button className={styles.login}>Login</button>
          </div>
        </div>
        <ul className={styles['list-option']}>
          <NavbarItem list={listOptions} />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar