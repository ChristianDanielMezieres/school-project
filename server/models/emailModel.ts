import * as mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  email_sender: String,
  subject: String,
  message: String,
});

const emailModel = mongoose.model('email', emailSchema);

export default emailModel;
