import { gql } from "apollo-boost";
import Router from "next/router";
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
                description
                category
                date
            }
        }
    `,
    variables: { id },
  });

  return res.data.getCarById;
};

export const addCar = async ({ car, upload }) => {
  car.price = +car.price;
  car.year = +car.year;
  car.mileage = +car.mileage;

  const res = await client.mutate({
    mutation: gql`
        mutation($car: CarInput!, $upload: Upload){
        addCar(car: $car, upload: $upload) {
                _id
            }
        }
    `,
    variables: { car, upload },
  });
  Router.push("/");
  return res.data.addCar;
};

export const updateCar = async ({
  id,
  car,
  upload,
}) => {
  car.price = +car.price;
  car.year = +car.year;
  car.mileage = +car.mileage;

  const res = await client.mutate({
    mutation: gql`
        mutation($id: ID!, $car: CarInput!, $upload: Upload) {
            updateCar(id: $id, car: $car, upload: $upload) {
                _id
            }
        }
    `,
    variables: {
      id,
      car,
      upload,
    },
  });
  Router.push("/");
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
    fetchPolicy: "no-cache",
  });

  client.resetStore();

  return {
    cars: res.data.getFilteredCars.cars,
    count: res.data.getFilteredCars.count,
  };
};
