import PropTypes from "prop-types";
import MainLayout from "../../../components/main-layout";
import { CarForm } from "../../../components/car-form/car-form";
import { getCarById } from "../../../operations/car-operations";

export default function Edit({ car }) {
  return (
    <MainLayout>
      <CarForm edit car={car} />
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
