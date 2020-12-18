import { gql } from "apollo-boost";
import { client } from "../utils/client";

export const getAllCars = async () => {
  const res = await client.query({
    query: gql`
        query {
            getAllCars {
                cars{
                    _id
                    brand
                    model
                    photo
                    price
                    year
                    mileage
                }
                count
            }
        }
    `,
  });
  client.resetStore();
  return res.data.getAllCars;
};
export const getCarsId = async () => {
  const res = await client.query({
    query: gql`
        query {
            getAllCars {
                cars{
                    _id
                }
                count
            }
        }
    `,
    fetchPolicy: "no-cache",
  });
  client.resetStore();
  return res.data.getAllCars.cars;
};
export const getCarById = async (id) => {
  const res = await client.query({
    query: gql`
        query($id: ID!) {
            getCarById(id: $id) {
                _id
                brand
                model
                price
                year
                mileage
                transmission
                externalColor
                photo
                engine
                colorSimpleName
                description
            }
        }
    `,
    variables: { id },
  });

  return res.data.getCarById;
};

export const addCar = async (car) => {
  car.price = +car.price;
  car.year = +car.year;
  car.mileage = +car.mileage;
  const res = await client.mutate({
    mutation: gql`
        mutation($car:CarInput!) {
            addCar(car: $car) {
                _id
            }
        }
    `,
    variables: { car },
  });

  return res.data.addCar;
};

export const updateCar = async ({
  id,
  car,
}) => {
  car.price = +car.price;
  car.year = +car.year;
  car.mileage = +car.mileage;

  const res = await client.mutate({
    mutation: gql`
        mutation($id: ID!, $car: CarInput!) {
            updateCar(id: $id, car: $car) {
                _id
            }
        }
    `,
    variables: {
      id,
      car,
    },
  });

  return res.data.updateCar;
};
export const deleteCar = async (id) => {
  const res = await client.mutate({
    mutation: gql`
        mutation($id: ID!) {
            deleteCar(id: $id) {
                _id
            }
        }
    `,
    variables: { id },
  });

  return res.data.deleteCar;
};

export const getFilteredCars = async (filter) => {
  const res = await client.query({
    query: gql`
        query($filter: FilterInput!) {
            getFilteredCars(filter: $filter) {
                _id
                brand
                model
                photo
                price
                year
                mileage
            }
        }
    `,
    variables: { filter },
  });
  return res.data.getFilteredCars;
};
