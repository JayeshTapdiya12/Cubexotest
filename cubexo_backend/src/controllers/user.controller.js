import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';





export const login = async (req, res, next) => {
  try {
    const data = await UserService.login(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: "Succefully login"
    })
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `cannot login: ${error}`
    })
  }
}

// creating new user
export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};

