import { useState } from "react";
import PropTypes from "prop-types";
import MainLayout from "../components/main-layout";
import Filters from "../components/filters";
import { CarListItem } from "../components/car-list-item/car-list-item";
import styles from "../styles/Home.module.css";
import { getAllCars, getCarsId } from "../operations/car-operations";

export default function Home({ cars }) {
  const [filteredCars, setFilteredCars] = useState(cars);
  const mappedCars = filteredCars.map((value, index) => <CarListItem key={value._id} id={value._id} brand={value.brand} model={value.model} photo={value.photo} price={value.price} year={value.year} />);

  return (
    <MainLayout>
      <Filters />
      <div className={styles.cars}>
        {mappedCars}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps(ctx) {
  const cars = await getAllCars();
  return {
    props: {
      cars,
    },
  };
}
export async function getStaticPaths() {
  const cars = await getCarsId();

  return {
    paths: cars.map((car) => ({
      params: {
        id: car._id,
      },
    })),
    fallback: false,
  };
}

Home.propTypes = PropTypes.shape({
  cars: PropTypes.arrayOf(PropTypes.shape({
    brand: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    colorSimpleName: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
    externalColor: PropTypes.string.isRequired,
    firstOwner: PropTypes.bool.isRequired,
    mileage: PropTypes.number.isRequired,
    model: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    transmission: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired).isRequired,
}).isRequired;
