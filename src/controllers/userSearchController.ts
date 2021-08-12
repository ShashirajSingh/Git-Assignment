export default class {
  static async userSearch(headers: { username: string }) {
    try {
      const userName: string = headers.username;
      return userName;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
