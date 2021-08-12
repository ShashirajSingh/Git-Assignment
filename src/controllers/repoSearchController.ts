export default class {
  static async repoSearch() {
    return new Promise((resolve) => {
      try {
        const result = { user_name: 'Shashi' };

        return resolve(result);
      } catch (error) {
        console.log(error);
      }
    });
  }
}
