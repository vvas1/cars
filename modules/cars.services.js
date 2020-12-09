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

  getFilteredCars({ filter }) {
    const filters = this.configureFilter(filter);
    return Cars.find(filters);
  }

  configureFilter(data) {
    const filter = {};
    const {
      brand, model, year, color, searchText,
    } = data;
    if (brand) {
      filter.brand = { $in: brand.map((value) => new RegExp(value, "i")) };
    }
    if (model) {
      filter.model = { $in: model.map((value) => new RegExp(value, "i")) };
    }
    if (year) {
      filter.year = { $in: year };
    }
    if (color) {
      filter.colorSimpleName = {
        $in: color.map((value) => new RegExp(value, "i")),
      };
    }
    if (searchText) {
      filter.description = new RegExp(searchText, "i");
    }
    return filter;
  }
}

export default new CarsServices();
