import User from '../models/user.model';
import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

// login user

export const login = async (body) => {

  const data = await User.findOne({ email: body.email });
  if (!data) {
    return "User is not created";
  }
  const match = await bcrypt.compare(body.password, data.password);
  if (match) {
    const token = jwt.sign({ userId: data._id, Email: data.email }, 'hidden_key');
    const hello = {
      token,
      isSeller: data.isSeller
    }
    return hello;
  } else {
    throw new Error("invlaid password or email")
  }


}

//create new user
export const newUser = async (body) => {

  const saltRounds = 10;
  const hashpass = await bcrypt.hashSync(body.password, saltRounds);
  body.password = hashpass;
  // await data.save();

  const data = await User.create(body);

  return data;
};


