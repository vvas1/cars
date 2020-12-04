export const carType = `
type Car {
  _id:ID
  brand: String
  model: String
  year: String
  firstOwner: Boolean
  price: String
  mileage: String
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
  year: String
  firstOwner: Boolean
  price: String
  mileage: String
  photo: String
  engine: String
  transmission: String
  categories: [String]
  externalColor: String
  colorSimpleName: String
  description:String
}`;
