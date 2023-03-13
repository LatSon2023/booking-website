import React from 'react'
import styles from './Cities.module.css'

function Cities(props) {
  return (
    <div className={styles.cities}>
      {props.data.map((city, index) => (
        <div className={styles.city} key={index}>
          <div className={styles.img}>
            <img src={city.image} alt={city.name} width='100%'/>
          </div>
          <div className={styles.content}>
            <h1>{city.name}</h1>
            <h3>{city.subText}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cities