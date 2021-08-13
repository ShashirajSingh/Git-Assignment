import repoService from '../services/repo.services';

import { Repo } from '../interfaces/repo.interface';

export default class {
  static async repoSearch(query: { q: string }) {
    try {
      const repoName: string = query.q;
      const data = await repoService.search(repoName);
      if (data.total_count === 0) {
        return { message: 'There is no such repository...' };
      } else {
        const contents: object[] = [];
        const output = {
          contents,
        };
        data.items.forEach(async (element: Repo) => {
          const newResponse = {
            repo_name: element.name,
            owner_name: element.owner.login,
            description: element.description,
            html_url: element.html_url,
            stars_count: element.stargazers_count,
          };
          output.contents.push(newResponse);
        });
        return output;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
