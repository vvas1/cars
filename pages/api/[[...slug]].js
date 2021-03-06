import { ApolloServer, gql } from "apollo-server-micro";
import { carsQuery, carsMutation } from "../../modules/cars.resolvers";
import { carType, carInputType } from "../../modules/cars.graphql";
import connectDb from "../../utils/db";

connectDb();

const typeDefs = gql`
    ${carType}
    ${carInputType}

    type PaginatedCar {
        cars: [Car]
        count: Int
    }
    type Query {
        getAllCars(skip: Int, limit: Int): PaginatedCar
        getCarById(id: ID!): Car
        getFilteredCars(filter: FilterInput, skip: Int, limit: Int): PaginatedCar
    }
    type  Mutation {
        addCar(car: CarInput!, upload: Upload): Car
        updateCar(car: CarInput!, id: ID!, upload: Upload): Car
        deleteCar(id:ID!): Car
    }
    input FilterInput {
        brand: String
        color: String
        model: String
        minYear: String
        maxYear: String
        minPrice: String
        maxPrice: String
        searchText: String
    }
`;

const resolvers = {
  Query: {
    ...carsQuery,
  },
  Mutation: {
    ...carsMutation,
  },

};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({
  path: "/api/graphql",
  onHealthCheck: () => {
    console.log("server is running...");
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
