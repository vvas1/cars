import carsServices from "./cars.services";

const carsQuery = {
  getAllCars: async (_, args) => await carsServices.getAllCars(args),
  getCarById: async (_, args) => {
    try {
      return await carsServices.getCarById(args);
    } catch (e) {
      return { message: e.message };
    }
  },
  getFilteredCars: async (_, args) => await carsServices.getFilteredCars(args),

};
const carsMutation = {
  addCar: async (parent, args) => await carsServices.addCar(args),
  updateCar: async (_, args) => await carsServices.updateCar(args),
  deleteCar: async (_, args) => await carsServices.deleteCar(args),
};

export { carsQuery, carsMutation };
