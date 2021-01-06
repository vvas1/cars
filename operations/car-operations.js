import { gql } from "apollo-boost";
import { client } from "../utils/client";

export const getAllCars = async ({ skip, limit }) => {
  const res = await client.query({
    query: gql`
        query($skip: Int, $limit: Int) {
            getAllCars(skip: $skip, limit: $limit) {
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
    variables: { skip, limit },
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
export const getFilteredCars = async ({ filter, skip, limit }) => {
  const res = await client.query({
    query: gql`
        query($filter: FilterInput, $skip: Int, $limit: Int) {
            getFilteredCars(filter: $filter, skip: $skip, limit: $limit) {
                cars {
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
    variables: {
      filter,
      skip,
      limit,
    },
  });

  await client.clearStore();

  return {
    cars: res.data.getFilteredCars.cars,
    count: res.data.getFilteredCars.count,
  };
};
