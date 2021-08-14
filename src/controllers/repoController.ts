import { Request, Response } from 'express';
import repoService from '../services/repo.service';
import { Repo } from '../interfaces/repo.interface';
import responseService from '../services/response.service';

export default class {
  static async repoSearch(req: Request, res: Response) {
    try {
      if (!req.query.q) {
        const apiResponse = responseService.success(
          'please provide a valid repository name.',
          {},
          403
        );
        res.send(apiResponse);
      } else {
        const repoName: any = req.query.q;
        const data = await repoService.search(repoName);
        if (data.total_count === 0) {
          const apiResponse = responseService.success(
            'There is no such repository.',
            {}
          );
          res.send(apiResponse);
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
          const apiResponse = responseService.success('success', output);
          res.send(apiResponse);
        }
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
