import { gql } from "apollo-boost";
import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { client } from "../utils/client";
import Filters from "../components/filters";
import { CarListItem } from "../components/car-list-item/car-list-item";
import MainLayout from "../components/main-layout";
import styles from "../styles/Home.module.css";

export default function Search({ cars = [] }) {
  const mapped = cars.map((car) => <CarListItem key={car._id} {...car} />);
  return (
    <MainLayout>
      <Filters />
      { cars && (
        <Paper className={styles.cars}>
          {mapped}
        </Paper>
      )}
    </MainLayout>
  );
}

Search.getInitialProps = async (ctx) => {
  const res = await client.query({
    query: gql`
query($filter:FilterInput!) {
getFilteredCars(filter:$filter){
_id
brand
model
year
photo
price
mileage
}
}`,
    variables: { filter: ctx.query },
  });
  return {
    cars: res.data.getFilteredCars,
    loading: res.loading,
  };
};

Search.propTypes = PropTypes.shape({
  cars: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    mileage: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,

  }).isRequired).isRequired,
}).isRequired;


