import Cars from "./cars.model";

class CarsServices {
  async getAllCars() {
    const cars = await Cars.find()
      .limit(15)
      .sort({ year: -1 });
    const count = await Cars.countDocuments();
    return {
      cars,
      count,
    };
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

  updateCar({
    id,
    car,
  }) {
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
      brand,
      minYear = 1990,
      maxYear = 2022,
      minPrice = 0,
      maxPrice = 222222,
      color,
      searchText,
    } = data;

    if (brand) {
      filter.brand = this.setFilterItem(brand);
    }

    if (minPrice) {
      filter.price = this.setFilterMinMax(minPrice, maxPrice);
    }

    if (maxPrice) {
      filter.price = this.setFilterMinMax(minPrice, maxPrice);
    }

    if (minYear) {
      filter.year = this.setFilterMinMax(minYear, maxYear);
    }

    if (maxYear) {
      filter.year = this.setFilterMinMax(minYear, maxYear);
    }

    if (color) {
      filter.colorSimpleName = this.setFilterItem(color);
    }

    if (searchText) {
      filter.description = this.setFilterItem(searchText);
    }
    return filter;
  }

  setFilterItem(item) {
    return new RegExp(item, "i");
  }

  setFilterMinMax(minItem, maxItem) {
    return {
      $gte: +minItem,
      $lte: +maxItem,

    };
  }
}

export default new CarsServices();
