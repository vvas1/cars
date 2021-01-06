import { useContext, useEffect, useState } from "react";
import { Fade, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import Pagination from "@material-ui/lab/Pagination";
import Filters from "../components/filters";
import { CarListItem } from "../components/car-list-item/car-list-item";
import MainLayout from "../components/main-layout";
import styles from "../styles/Home.module.css";
import { getFilteredCars } from "../operations/car-operations";
import { MainContext } from "../context/mainContext";
import CustomCircularProgress from "../components/custom-circular-progress/custom-circullar-progress";
import { helper } from "../utils";
import { carsPerPage } from "../configs";

export default function Search({
  cars = [],
  count,
}) {
  const {
    state,
    send,
  } = useContext(MainContext);

  const [show, setShow] = useState(false);

  const { fetchData } = helper(state, send);

  useEffect(() => {
    send({
      type: "SET_LOADING",
      loading: false,
    });
    setShow(true);
  }, [cars, setShow]);

  const setPageHandler = (e, value) => {
    send({
      type: "SET_CURRENT_PAGE",
      currentPage: value,
    });
    send({
      type: "SET_CURRENT_PAGE",
      currentPage: value,
    });
    fetchData();
  };

  const mappedCars = cars.map((value, index) => (
    <Fade key={value._id} in={show} timeout={index * 200}>
      <div><CarListItem {...value} /></div>
    </Fade>

  )); return (
    <MainLayout>
      <Filters />
      {state.context.loading ? (
        <CustomCircularProgress />
      ) : (
        <Paper className={styles.cars}>
          {mappedCars}
        </Paper>
      )}
      <Pagination
        style={{ marginTop: "1rem" }}
        color="primary"
        count={Math.round(count / carsPerPage)}
        page={+state.context.currentPage}
        showFirstButton
        showLastButton
        onChange={setPageHandler}
      />
    </MainLayout>
  );
}

Search.getInitialProps = async (ctx) => {
  const {
    page,
    ...filter
  } = ctx.query;
  const {
    cars,
    count,
  } = await getFilteredCars({
    filter,
    skip: (page - 1) * carsPerPage,
    limit: carsPerPage,
  });

  return {
    cars,
    count,
  };
};

Search.propTypes = PropTypes.shape({
  cars: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    model: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,

  }).isRequired).isRequired,
}).isRequired;
