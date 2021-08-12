import express, { Request, Response } from 'express';
import repoSearchController from '../controllers/repoSearchController';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  console.log('repo route');
  const query: any = req.query;
  const output = await repoSearchController.repoSearch(query);
  res.send(output);
});

export { router as repoRoute };
