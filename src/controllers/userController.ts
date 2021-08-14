import { Request, Response } from 'express';
import userModel from '../models/user.model';
import userService from '../services/user.service';
import responseService from '../services/response.service';

export default class {
  static async getUserDetails(req: Request, res: Response) {
    try {
      const userName: string = req.body.username;
      if (!userName) {
        const apiResponse = responseService.success(
          'please provide a valid user name.',
          {},
          403
        );
        res.send(apiResponse);
      } else {
        const userData = await userModel.findOne({ login: `${userName}` });
        /* if user is present in our DB. */
        if (userData !== null) {
          const apiResponse = responseService.success('Success', userData, 200);
          res.send(apiResponse);
        } else {
          const response = await userService.userSearch(userName);
          if (response.data) {
            const responseData = await userModel.create(response.data);
            const apiResponse = responseService.success(
              'Success',
              responseData,
              200
            );

            res.send(apiResponse);
          } else {
            const apiResponse = responseService.success('No user found', {});
            res.send(apiResponse);
          }
        }
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
