import UserModel from '../models/saveUser.model';
import findUserModel from '../models/findUser.model';

import userService from '../services/user.services';

export default class {
  static async getUserDetails(body: { username: string }) {
    try {
      const userName: string = body.username;
      const userData = await findUserModel.findData(userName);
      /* if user is present in our DB. */
      if (userData !== null) {
        return userData;
      } else {
        const response = await userService.userSearch(userName);
        if (response.data) {
          await UserModel.saveData(response.data);
          return response.data;
        } else {
          return { message: 'No user found' };
        }
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
