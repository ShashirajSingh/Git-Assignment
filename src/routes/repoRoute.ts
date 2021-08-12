import express from 'express';
import repoSearchController from '../controllers/repoSearchController';

const router = express.Router();

router.get('/repo', async (req, res) => {
  try {
    const output = await repoSearchController.repoSearch();
    res.send(output);
  } catch (err) {
    res.status(400).send(err);
  }
});

export { router as repoRoute };
