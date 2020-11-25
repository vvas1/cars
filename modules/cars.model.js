const mongoose = require("mongoose");

const { Schema } = mongoose;

const cars = new Schema({
  brand: String,
  model: String,
  year: Number,
  firstOwner: Boolean,
  price: Number,
  mileage: Number,
  photo: String,
  engine: String,
  transmission: String,
  categories: [String],
  externalColor: String,
  colorSimpleName: String,
});

export default mongoose.models && mongoose.models.cars
  ? mongoose.models.cars
  : mongoose.model("cars", cars, "cars");
