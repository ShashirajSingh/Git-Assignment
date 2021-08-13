import { Request, Response } from 'express';
import userModel from '../models/user.model';
import userService from '../services/user.service';
import responseFormat from '../services/response.service';

export default class {
  static async getUserDetails(req: Request, res: Response) {
    try {
      const userName: string = req.body.username;
      const userData = await userModel.findOne({ login: `${userName}` });
      /* if user is present in our DB. */
      if (userData !== null) {
        const apiResponse = responseFormat.success('Success', userData, 200);
        res.send(apiResponse);
      } else {
        const response = await userService.userSearch(userName);
        if (response.data) {
          const responseData = await userModel.create(response.data);
          const apiResponse = responseFormat.success(
            'Success',
            responseData,
            200
          );

          res.send(apiResponse);
        } else {
          res.send({ message: 'No user found' });
        }
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
