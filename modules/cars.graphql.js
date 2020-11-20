export const carType = `
type Car {
_id:ID
  brand: String
  model: String
  year: Int
  firstOwner: Boolean
  price: Int
  mileage: Int
  photo: String
  engine: String
  transmission: String
  categories: [String]
  externalColor: String
  colorSimpleName: String
}`;

export const carInputType = `
input CarInput {
  _id:ID
  brand: String
  model: String
  year: Int
  firstOwner: Boolean
  price: Int
  mileage: Int
  photo: String
  engine: String
  transmission: String
  categories: [String]
  externalColor: String
  colorSimpleName: String
}`;
