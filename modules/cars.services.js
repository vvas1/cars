import Cars from "./cars.model";

class CarsServices {
  async getAllCars() {
    const cars = await Cars.find().limit(15).sort({ year: -1 });
    const count = await Cars.countDocuments();
    return { cars, count };
  }

  async getCarById({ id }) {
    const car = await Cars.findById(id);
    if (!car) {
      throw new Error("car not found");
    }
    return car;
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

  getFilteredCars({ filter }) {
    const filters = this.configureFilter(filter);
    return Cars.find(filters);
  }

  configureFilter(data) {
    const filter = {};
    const {
      brand, model, minYear = 1990, maxYear = 2022, minPrice = 0, maxPrice = 222222, color, searchText,
    } = data;

    if (brand) {
      filter.brand = new RegExp(brand, "i");
    }

    if (model) {
      filter.model = new RegExp(model, "i");
    }

    if (minPrice) {
      filter.price = { $gte: +minPrice, $lte: minPrice };
    }

    if (maxPrice) {
      filter.price = { $gte: minPrice, $lte: +maxPrice };
    }

    if (minYear) {
      filter.year = { $gte: +minYear, $lte: +maxYear };
    }

    if (maxYear) {
      filter.year = { $gte: +minYear, $lte: +maxYear };
    }

    if (color) {
      filter.colorSimpleName = new RegExp(color, "i");
    }
    if (searchText) {
      filter.description = new RegExp(searchText, "i");
    }

    return filter;
  }
}

export default new CarsServices();
