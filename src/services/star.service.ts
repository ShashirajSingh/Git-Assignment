import axios from 'axios';

export default class {
  static async starsData(userName: string, repoName: string) {
    try {
      const url = `https://api.github.com/repos/${userName}/${repoName}/stargazers`;
      console.log('url', url);
      const response = await axios.get(url, {
        headers: {
          Authorization: `token ${process.env.GIT_TOKEN}`,
        },
      });
      // console.log('response', response);
      const { data } = response;
      return data;
    } catch (error) {
      return error;
    }
  }
}
