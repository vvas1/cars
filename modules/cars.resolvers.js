import carsServices from './cars.services'

const carsQuery = {
  getAllCars: async () => await carsServices.getAllCars(),
  getCarById: async (parent, args) => await carsServices.getCarById(args),
}
const carsMutation = {
  addCar: async (parent, args) => await carsServices.addCar(args),
  updateCar: async  (parent,args)=> await carsServices.updateCar(args),
  deleteCar:async  (parent,args)=> await carsServices.deleteCar(args)
}

export { carsQuery, carsMutation };
