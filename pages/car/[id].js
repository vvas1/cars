import ApolloClient, { gql } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import PropTypes from "prop-types";
import CarDetails from "../../components/car-details/car-details";
import MainLayout from "../../components/main-layout";

export default function OneCar({ car }) {
  return (
    <MainLayout>
      <CarDetails car={car} />
    </MainLayout>
  );
}
export async function getStaticProps(ctx) {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache({ addTypename: false }),
  });
  const res = await client.query({
    query: gql`
            query($id: ID!) {
                getCarById(id: $id) {                 
                    brand
                    model
                    price
                    year
                    mileage
                    transmission
                    externalColor
                    photo
                }
            }
        `,
    variables: { id: ctx.params.id },
  });

  return {
    props: {
      car: res.data.getCarById,
    },
  };
}
export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
  });
  const res = await client.query({
    query: gql`
            query {
                getAllCars {
                    _id
                    brand
                    model
                }
            }
        `,
  });

  return {
    paths: res.data.getAllCars.map((car) => ({
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
