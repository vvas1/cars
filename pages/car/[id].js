import PropTypes from "prop-types";
import MainLayout from "../../components/main-layout";
import CarDetails from "../../components/car-details/car-details";
import { getCarById, getCarsId } from "../../operations/car-operations";

export default function OneCar({ car = {} }) {
  return (
    <MainLayout>
      <CarDetails car={car} />
    </MainLayout>
  );
}
export async function getStaticProps(ctx) {
  const car = await getCarById(ctx.params.id);

  return {
    props: {
      car,
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
