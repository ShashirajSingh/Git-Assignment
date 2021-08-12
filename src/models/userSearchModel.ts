import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const UserSchema = new mongoose.Schema({
  _id: String,
  name: String,
  data: {
    type: Object,
  },
});

export default mongoose.model(`${process.env.COLLECTION_NAME}`, UserSchema);
