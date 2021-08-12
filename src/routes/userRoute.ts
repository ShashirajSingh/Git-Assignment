import express, { Request, Response } from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const headers: any = req.headers;
    const output = await userController.getUserDetails(headers);
    res.send(output);
  } catch (err) {
    res.status(400).send(err);
  }
});

export { router as userRoute };
