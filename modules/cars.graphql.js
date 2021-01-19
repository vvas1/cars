export const carType = `
type Car {
  _id:ID
  brand: String
  model: String
  year: Int
  price: Int
  mileage: Int
  photo: String
  engine: String
  transmission: String
  category: String
  externalColor: String
  description: String
  date: String
}`;

export const carInputType = `
input CarInput {
  brand: String
  model: String
  year: Int
  price: Int
  mileage: Int
  photo: String
  engine: String
  transmission: String
  category: String
  externalColor: String
  description:String
}`;
