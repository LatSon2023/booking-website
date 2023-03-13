import React from 'react'
import styles from './DetailHotel.module.css'

const detail = {
	"name": "Tower Street Apartments",
	"address": "Elton St 125 New york",
	"distance": "Excellent location - 500m from center",
	"price": "Book a stay over $114 at this property and get a free airport taxi",
	"photos": [
		"./images/hotel_detail_1.jpg",
		"./images/hotel_detail_2.jpg",
		"./images/hotel_detail_3.jpg",
		"./images/hotel_detail_4.jpg",
		"./images/hotel_detail_5.jpg",
		"./images/hotel_detail_6.jpg"
	],
	"title": "Stay in the heart of City",
	"description": "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
	"nine_night_price": 955
}

function DetailHotel() {
  return (
    <div className={styles.wrap}>
      <div className={styles["basic-info"]}>
        <h2>{detail.name}</h2>
        <p className={styles.address}><i class="fa-solid fa-location-dot"></i> {detail.address}</p>
        <p className={styles.blue}>{detail.distance}</p>
        <p className={styles.green}>{detail.price}</p>
        <button className={`${styles.button} ${styles.posri}`}>Reserve or Book now!</button>
      </div>  
      <div className={styles["wrap-img"]}>
        {detail.photos.map(image => (
          <img src={image} alt={detail.name} width='380px'/>
        ))}
      </div>
      <div className={styles.detail}>
        <div className={styles.content}>
          <h2>{detail.title}</h2>
          <p>{detail.description}</p>
        </div>
        <div className={styles.booking}>
          <h3 className={styles.gray}>Perfect for a 9-night stay</h3>
          <p>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</p>
          <p className={styles.price9night}><b>${detail['nine_night_price']}</b>(9 nights)</p>
          <button className={`${styles.button} ${styles.w100}`}>Reserve or Book now!</button>
        </div>
      </div>
    </div>
  )
}

export default DetailHotel