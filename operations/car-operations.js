import { gql } from "apollo-boost";
import { client } from "../utils/client";

export const getAllCars = async () => {
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
  client.resetStore();
  return res.data.getAllCars;
};
export const getCarsId = async () => {
  const res = await client.query({
    query: gql`
            query {
                getAllCars {
                    _id              
                }
            }
        `,
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
                }
            }
        `,
    variables: { id },
  });

  return res.data.getCarById;
};

export const addCar = async (car) => {
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
