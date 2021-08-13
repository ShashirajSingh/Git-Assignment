import { Request, Response } from 'express';
import repoService from '../services/repo.service';
import { Repo } from '../interfaces/repo.interface';

export default class {
  static async repoSearch(req: Request, res: Response) {
    try {
      if (!req.query.q) {
        res.send({ message: 'please provide a valid repository name.' });
      } else {
        const repoName: any = req.query.q;
        const data = await repoService.search(repoName);
        if (data.total_count === 0) {
          res.send({ message: 'There is no such repository.' });
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
          res.send(output);
        }
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
