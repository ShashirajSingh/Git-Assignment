export default class {
  static async repoSearch() {
    return new Promise((resolve, reject) => {
      try {
        const result = { user_name: 'Shashi' };

        return resolve(result);
      } catch (error) {
        console.log(error);
        return reject(error);
      }
    });
  }
}
