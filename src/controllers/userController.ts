import UserModel from '../models/userSearchModel';
import userService from '../services/user.services';

export default class {
  static async getUserDetails(body: { username: string }) {
    try {
      const userName: string = body.username;
      const userData = await UserModel.findOne({ userName });

      /* if user is present in our DB. */
      if (userData !== null) {
        return userData;
      } else {
        const response = await userService.userSearch(userName);
        if (response.data) {
          await UserModel.insertMany(response);
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
