import * as mongoose from 'mongoose';

const admincardSchema = new mongoose.Schema({
  imageUrl: String,
  icon: String,
  title: String,
  text: String,
  foottext: String,
});

const admincardModel = mongoose.model('admincard', admincardSchema);

export default admincardModel;
