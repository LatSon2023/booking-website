import React from 'react'
import styles from './HotelList.module.css'

function HotelList(props) {
  const clickHandler = () => {
    window.location.replace('http://localhost:3000/detail')
  }

  return (
    <div className={styles.wrap}>
      <h2>Homes guests love</h2>
      <div className={styles.lists}>
        {props.data.map((hotel, index) => (
          <div className={styles.list} key={index}>
            <div className={styles.img}>
              <img src={hotel['image_url']} alt={hotel.name} height='280px' width='280px'/>
            </div>
            <div className={styles.content}>
              <h3 onClick={clickHandler} className={`${styles.name} ${styles.m10}`}>{hotel.name}</h3>
              <p className={styles.m10}>{hotel.city}</p>
              <p className={styles.m10}><b>Starting from ${hotel.price}</b></p>
              <p className={styles.m10}><span>{hotel.rate}</span> {hotel.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelList