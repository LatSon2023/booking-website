import React from 'react'
import styles from './Header.module.css'

function Header() {
  const clickHandler = (event) => {
    event.preventDefault()
    window.location.replace('http://localhost:3000/search')
  }

  return (
    <header className={styles['wrap-header']}>
      <div className={styles.header}>
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>Get rewarded for your travels -  unlock instant savings of 10% or more with a free account</p>
        <button className={styles.button}>Sign in / Register</button>
        <form className={styles.form}>
          <div>
            <label htmlFor=""><i className="fa fa-bed"></i></label>
            <input type="text" placeholder='Where are you going?'/>
          </div>
          <div className={styles.divDate}>
            <label htmlFor=""><i className="fa fa-calendar"></i></label>
            <input type="text" placeholder='06/24/2022 to 06/24/2022'/>
          </div>
          <div>
            <label htmlFor=""><i className="fa fa-female"></i></label>
            <input type="number" placeholder='1 adult . 0 children . 1 room'/>
          </div>
          <button onClick={clickHandler} className={styles.button}>Search</button>
        </form>
      </div>
    </header>
  )
}

export default Header