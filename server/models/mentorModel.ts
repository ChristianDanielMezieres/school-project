import * as mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  imageUrl: String,
  name: String,
  surname: String,
  age: Number,
  date: String,
  gender: String,
  level: String,
  school: String,
  phone: String,
  email: String,
  address: String,
  town: String,
  zip: String,
  verified: String,
});

const mentorModel = mongoose.model('mentor', mentorSchema);

export default mentorModel;
