import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    isSeller: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
