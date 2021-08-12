import express, { Request, Response } from 'express';
import repoController from '../controllers/repoController';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const query: any = req.query;
  const output = await repoController.repoSearch(query);
  res.send(output);
});

export { router as repoRoute };
