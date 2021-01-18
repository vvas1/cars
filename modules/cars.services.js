import cloudinary from "cloudinary";
import Cars from "./cars.model";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

class CarsServices {
  async getAllCars({
    skip,
    limit,
  }) {
    const cars = await Cars.find()
      .skip(skip)
      .limit(limit)
      .sort({ date: -1 });
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

  async addCar({
    car,
    upload,
  }) {
    await cloudinary.v2.uploader(
      upload,
      { upload_preset: "ml_default" },
    )
      .then(async (result) => {
        const {
          url,
          public_id,
        } = result;
        car.photo = url;
        car.public_id = public_id;
        return await new Cars(car).save();
      });
  }

  async updateCar({ id, car, upload }) {
    const foundCar = await Cars.findById(id);
    if (upload) {
      await cloudinary.v2.uploader.destroy(foundCar.public_id);

      return await cloudinary.v2.uploader
        .upload(upload, {
          upload_preset: "ml_default",
          use_filename: true,
        })
        .then(async (result) => {
          const {
            url,
            public_id,
          } = result;
          car.photo = url;
          car.public_id = public_id;
          return await Cars.findByIdAndUpdate(id, { $set: car }, { new: true });
        });
    }
  }

  async deleteCar({ id }) {
    const car = await Cars.findByIdAndDelete(id);
    await cloudinary.v2.uploader.destroy(car.public_id);
    return car;
  }

  async getFilteredCars({
    filter,
    skip,
    limit,
  }) {
    const filters = this.configureFilter(filter);
    const cars = await Cars.find(filters)
      .skip(skip)
      .limit(limit);
    const count = await Cars.find(filters)
      .countDocuments();

    return {
      cars,
      count,
    };
  }

  configureFilter(data) {
    const filter = {};
    const {
      brand = "",
      minYear = 1990,
      maxYear = 2022,
      minPrice = 0,
      maxPrice = 222222,
      color = "",
      searchText = "",
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
      filter.externalColor = this.setFilterItem(color);
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
