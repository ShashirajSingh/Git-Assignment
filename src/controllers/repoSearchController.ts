import repoService from '../services/repoSearchServices';

export default class {
  static repoSearch(query: { q: string }) {
    return new Promise((resolve, reject) => {
      try {
        const repoName: string = query.q;
        const data = repoService.repoSearch(repoName);
        return resolve(data);
      } catch (error) {
        console.log(error);
        return reject(error);
      }
    });
  }
}
