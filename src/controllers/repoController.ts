import repoService from '../services/repoSearchServices';
import { User } from '../interfaces/repo.interface';

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

        data.items.forEach((element: User) => {
          const newResponse = {
            repo_name: element.full_name,
            owner_name: element.owner.login,
            description: element.description,
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
