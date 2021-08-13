import userModel from '../models/user.model';

import userService from '../services/user.services';

export default class {
  static async getUserDetails(body: { username: string }) {
    try {
      const userName: string = body.username;
      const userData = await userModel.findOne({ login: `${userName}` });
      /* if user is present in our DB. */
      if (userData !== null) {
        return userData;
      } else {
        const response = await userService.userSearch(userName);
        if (response.data) {
          const responseData = await userModel.create(response.data);
          return responseData;
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
