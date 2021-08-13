import express from 'express';
import repoController from '../controllers/repoController';

const router = express.Router();

router.get('/', repoController.repoSearch);

export { router as repoRoute };
