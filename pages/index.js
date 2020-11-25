import { useState } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import MainLayout from '../components/main-layout';
import Filters from '../components/filters';
import { CarListItem } from '../components/car-list-item/car-list-item';
import styles from '../styles/Home.module.css'

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
