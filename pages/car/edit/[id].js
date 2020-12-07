import PropTypes from "prop-types";
import MainLayout from "../../../components/main-layout";
import { CarForm } from "../../../components/car-form/car-form";
import { getCarById, getCarsId } from "../../../operations/car-operations";

export default function Edit({ car }) {
  return (
    <MainLayout>
      <CarForm edit car={car} />
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

Edit.propTypes = {
  car: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    mileage: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    externalColor: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};
