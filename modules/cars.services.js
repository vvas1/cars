import Cars from './cars.model'

class CarsServices {
  getAllCars() {
    return Cars.find();
  }

  getCarById({ id }) {
    return Cars.findById(id);
  }

  async addCar(data) {
    return await new Cars(data).save();
  }

  updateCar({ id, data }) {
    return Cars.findByIdAndUpdate(id, data, { new: true });
  }

  deleteCar({ id }) {
    return Cars.findByIdAndDelete(id);
  }
}

export default new CarsServices();
