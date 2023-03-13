import React from 'react'
import Cities from './Cities'
import HotelList from './HotelList'
import styles from './Main.module.css'
import Types from './Types'

const cities = [
	{
		"name": "Dublin",
		"subText": "123 properties",
		"image": "./images/city_1.webp"
	},
	{
		"name": "Reno",
		"subText": "533 properties",
		"image": "./images/city_2.webp"
	},
	{
		"name": "Austin",
		"subText": "532 properties",
		"image": "./images/city_3.webp"
	}
]

const types = [
	{
		"name": "Hotels",
		"count": 233,
		"image": "./images/type_1.webp"
	},
	{
		"name": "Apartments",
		"count": 2331,
		"image": "./images/type_2.jpg"
	},
	{
		"name": "Resorts",
		"count": 2331,
		"image": "./images/type_3.jpg"
	},
	{
		"name": "Villas",
		"count": 2331,
		"image": "./images/type_4.jpg"
	},
	{
		"name": "Cabins",
		"count": 2331,
		"image": "./images/type_5.jpg"
	}
]

const hotelList = [
	{
		"name": "Aparthotel Stare Miasto",
		"city": "Madrid",
		"price": 120,
		"rate": 8.9,
		"type": "Excellent",
		"image_url": "./images/hotel_1.webp"
	},
	{
		"name": "Comfort Suites Airport",
		"city": "Austin",
		"price": 140,
		"rate": 9.3,
		"type": "Exceptional",
		"image_url": "./images/hotel_2.jpg"
	},
	{
		"name": "Four Seasons Hotel",
		"city": "Lisbon",
		"price": 99,
		"rate": 8.8,
		"type": "Excellent",
		"image_url": "./images/hotel_3.jpg"
	},
	{
		"name": "Hilton Garden Inn",
		"city": "Berlin",
		"price": 105,
		"rate": 8.9,
		"type": "Excellent",
		"image_url": "./images/hotel_4.jpg"
	}
]

function Main() {
  return (
    <div className={styles.container}>
      <Cities data={cities}/>
      <Types data={types}/>
      <HotelList data={hotelList}/>
    </div>
  )
}

export default Main