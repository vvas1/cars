import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import MainLayout from "../components/main-layout";
import Filters from "../components/filters";
import { CarListItem } from "../components/car-list-item/car-list-item";
import styles from "../styles/Home.module.css";
import { getAllCars } from "../operations/car-operations";
import CustomCircularProgress from "../components/custom-circular-progress/custom-circullar-progress";
import { MainContext } from "../context/mainContext";

export default function Home({ cars = [] }) {
  const { state, send } = useContext(MainContext);

  useEffect(() => {
    send({ type: "SET_LOADING", loading: false });
  }, [cars]);

  const mappedCars = cars.map((value) => <CarListItem key={value._id} {...value} />);

  return (
    <MainLayout>
      <Filters />
      {state.context.loading ? (
        <CustomCircularProgress />
      ) : (
        <div className={styles.cars}>{cars && mappedCars}</div>
      )}
    </MainLayout>
  );
}

Home.getInitialProps = async () => {
  const res = await getAllCars(0, 12);

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
