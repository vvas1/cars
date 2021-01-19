import PropTypes from "prop-types";
import MainLayout from "../../components/main-layout";
import CarDetails from "../../components/car-details/car-details";
import { getCarById } from "../../operations/car-operations";

export default function OneCar({ car = {} }) {
  return (
    <MainLayout>
      <CarDetails car={car} />
    </MainLayout>
  );
}
export async function getServerSideProps(ctx) {
  const car = await getCarById(ctx.params.id);

  return {
    props: {
      car,
    },
  };
}

OneCar.propTypes = {
  car: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    transmission: PropTypes.string.isRequired,
    externalColor: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};
