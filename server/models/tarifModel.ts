import * as mongoose from 'mongoose';

const tarifSchema = new mongoose.Schema({
  plan: String,
  price: Number,
  description: String,
});

const tarifModel = mongoose.model('tarif', tarifSchema);

export default tarifModel;
