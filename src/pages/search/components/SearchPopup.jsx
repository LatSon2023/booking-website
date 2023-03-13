import React from 'react'
import styles from './SearchPopup.module.css'

function SearchPopup() {
  return (
    <div className={styles.wrap}>
      <form action="" className={styles.form}>
        <h3>Search</h3>
        <div className={`${styles.fs13} ${styles.div}`}>
          <label htmlFor="destination">Destination</label>
          <input type="text" id='destination'/>
        </div>
        <div className={`${styles.fs13} ${styles.div}`}>
          <label htmlFor="date">Check-in Date</label>
          <input type="text" id='date' value='06/24/2022 to 06/24/2022'/>
        </div>
        <div>
          <p className={styles.fs13}>Options</p>
          <div className={styles.fs12}>
            <span>Min price per night</span>
            <input type="number" />
          </div>
          <div className={styles.fs12}>
            <span>Max price per night</span>
            <input type="number" />
          </div>
          <div className={styles.fs12}>
            <span>Adult</span>
            <input type="number" value='1'/>
          </div>
          <div className={styles.fs12}>
            <span>Children</span>
            <input type="number" value='0'/>
          </div>
          <div className={styles.fs12}>
            <span>Room</span>
            <input type="number" value='1'/>
          </div>
        </div>
        <button className={styles.button}>Search</button>
      </form>

    </div>
  )
}

export default SearchPopup