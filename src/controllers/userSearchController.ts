import UserModel from '../models/userSearchModel';
import userSearchServices from '../services/userSearchServices';

export default class {
  static async getUserDetails(headers: { username: string }) {
    try {
      const userName: string = headers.username;
      const userData = await UserModel.findOne({ userName });
      console.log(userData);

      /* if user is present in our DB. */
      if (userData !== null) {
        return userData;
      } else {
        const response = await userSearchServices.userSearch(userName);
        if (response.data) {
          const a = await UserModel.insertMany(response);
          console.log(a);
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
