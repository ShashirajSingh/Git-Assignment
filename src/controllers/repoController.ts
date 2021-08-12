import repoService from '../services/repo.services';
// import starService from '../services/star.service';

import { Repo } from '../interfaces/repo.interface';

export default class {
  static async repoSearch(query: { q: string }) {
    try {
      const repoName: string = query.q;
      const data = await repoService.search(repoName);
      if (data.total_count === 0) {
        return { message: 'There is no such repository...' };
      } else {
        const output = {
          data: [{}],
        };

        data.items.forEach(async (element: Repo) => {
          // const starsData = await starService.starsData(
          //   element.owner.login,
          //   repoName
          // );
          // console.log('starsData', starsData.data);
          const newResponse = {
            repo_name: element.full_name,
            owner_name: element.owner.login,
            description: element.description,
            starts_count: 0,
          };
          output.data.push(newResponse);
        });
        return output;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
