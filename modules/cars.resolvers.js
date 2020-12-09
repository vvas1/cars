import carsServices from "./cars.services";

const carsQuery = {
  getAllCars: async () => await carsServices.getAllCars(),
  getCarById: async (_, args) => await carsServices.getCarById(args),
  getFilteredCars: async (_, args) => await carsServices.getFilteredCars(args),

};
const carsMutation = {
  addCar: async (parent, args) => await carsServices.addCar(args),
  updateCar: async (_, args) => await carsServices.updateCar(args),
  deleteCar: async (_, args) => await carsServices.deleteCar(args),
};

export { carsQuery, carsMutation };
