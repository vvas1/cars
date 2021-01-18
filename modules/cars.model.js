const mongoose = require("mongoose");

const { Schema } = mongoose;

const cars = new Schema({
  brand: String,
  model: String,
  year: Number,
  price: Number,
  mileage: Number,
  photo: String,
  engine: String,
  transmission: String,
  category: String,
  externalColor: String,
  colorSimpleName: String,
  description: String,
  date: {
    type: String,
    default: Date.now(),
  },
  public_id: String,
});

export default mongoose.models && mongoose.models.cars
  ? mongoose.models.cars
  : mongoose.model("cars", cars, "cars");
