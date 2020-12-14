import PropTypes from "prop-types";
import MainLayout from "../components/main-layout";
import Filters from "../components/filters";
import { CarListItem } from "../components/car-list-item/car-list-item";
import styles from "../styles/Home.module.css";
import { getAllCars } from "../operations/car-operations";

export default function Home({ cars = [] }) {
  const mappedCars = cars.map((value) => <CarListItem key={value._id} {...value} />);

  return (
    <MainLayout>

      <Filters />
      <div className={styles.cars}>
        {mappedCars}
      </div>

    </MainLayout>
  );
}

Home.getInitialProps = async () => {
  const res = await getAllCars();

  return {
    cars: res.cars,
  };
};

Home.propTypes = PropTypes.shape({
  cars: PropTypes.arrayOf(PropTypes.shape({
    brand: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    model: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired).isRequired,
}).isRequired;
