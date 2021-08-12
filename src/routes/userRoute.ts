import express, { Request, Response } from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const body: any = req.body;
    const output = await userController.getUserDetails(body);
    res.send(output);
  } catch (err) {
    res.status(400).send(err);
  }
});

export { router as userRoute };
