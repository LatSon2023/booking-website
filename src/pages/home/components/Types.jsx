import React from 'react'
import styles from './Types.module.css'

function Types(props) {
  return (
    <div className={styles.wrap}>
	    <h2>Browse by property type</h2>
      <div className={styles.types}>
        {props.data.map((type, index) => (
          <div className={styles.type} key={index}>
            <div className={styles.img}>
              <img src={type.image} alt={type.name} width='220px' height='150px'/>
            </div>
            <div className={styles.content}>
              <h4>{type.name}</h4>
              <p>{type.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Types