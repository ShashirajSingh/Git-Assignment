import express, { Request, Response } from 'express';
import userSearchController from '../controllers/userSearchController';

const router = express.Router();

router.post('/user', async (req: Request, res: Response) => {
  try {
    const headers: any = req.headers;
    const output = await userSearchController.userSearch(headers);
    res.send(output);
  } catch (err) {
    res.status(400).send(err);
  }
});

export { router as userRoute };
