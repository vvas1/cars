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
   getAllCars: PaginatedCar
      getCarById(id:ID!): Car
   getFilteredCars(filter: FilterInput!): [Car]
  }  
  type  Mutation {
    addCar(car:CarInput): Car
    updateCar(car: CarInput,id:ID!):Car
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

const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
