const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cars = new Schema({
    _id: Schema.ObjectId,
    brand:String,
    model:String,
    year:Number,
    mileage:Number,
    firstOwner:Boolean,
    engine:String,
    body:String,
    externalColor:String,
    simpleColor:String
});

export default mongoose.models && mongoose.models.cars
    ? mongoose.models.cars
    : mongoose.model('cars', cars, 'cars');
