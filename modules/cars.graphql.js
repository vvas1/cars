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
  categories: [String]
  externalColor: String
  colorSimpleName: String
    description:String
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
  categories: [String]
  externalColor: String
  colorSimpleName: String
  description:String
}`;
