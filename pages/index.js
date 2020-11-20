import { useState } from 'react';
import MainLayout from '../components/main-layout';
import Filters from '../components/filters';
import { cars } from '../cars.json'
import { CarListItem } from '../components/car-list-item/car-list-item';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [filteredCars, setFilteredCars] = useState(cars)
  const mappedCars = filteredCars.map((value, index) => <CarListItem key={index} brand={value.brand} model={value.model} photo={value.photo} price={value.price} year={value.year} />)

  return (
    <MainLayout>
      <Filters />
      <div className={styles.cars}>
        {mappedCars}
      </div>
    </MainLayout>
  )
}
