import { useState } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import PropTypes from 'prop-types';
import MainLayout from '../components/main-layout';
import Filters from '../components/filters';
import { CarListItem } from '../components/car-list-item/car-list-item';
import styles from '../styles/Home.module.css'

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
}).isRequired
export default function Home({ cars }) {
  const [filteredCars, setFilteredCars] = useState(cars)
  const mappedCars = filteredCars.map((value, index) => <CarListItem key={value._id} id={value._id} brand={value.brand} model={value.model} photo={value.photo} price={value.price} year={value.year} />)

  return (
    <MainLayout>
      <Filters />
      <div className={styles.cars}>
        {mappedCars}
      </div>
    </MainLayout>
  )
}

export async function getStaticProps(ctx) {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache({ addTypename: false }),
  });
  const res = await client.query({
    query: gql`
            query {
                getAllCars {
                    _id
                    brand
                    model
                    photo
                    price
                    year                  
                }
            }
        `,
  });

  return {
    props: {
      cars: res.data.getAllCars,
    },
  };
}
export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
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
