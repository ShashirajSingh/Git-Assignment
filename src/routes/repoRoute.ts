import express, { Request, Response } from 'express';
import repoSearchController from '../controllers/repoSearchController';

const router = express.Router();

router.get('/repo', async (req: Request, res: Response) => {
  try {
    const repoName: any = req.query;
    const output = await repoSearchController.repoSearch(repoName);
    res.send(output);
  } catch (err) {
    res.status(400).send(err);
  }
});

export { router as repoRoute };
