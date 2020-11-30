import Cars from "./cars.model";

class CarsServices {
  getAllCars() {
    return Cars.find();
  }

  getCarById({ id }) {
    return Cars.findById(id);
  }

  async addCar({ car }) {
    return await new Cars(car).save();
  }

  updateCar({ id, car }) {
    return Cars.findByIdAndUpdate(id, { $set: car }, { new: true });
  }

  deleteCar({ id }) {
    return Cars.findByIdAndDelete(id);
  }
}

export default new CarsServices();
