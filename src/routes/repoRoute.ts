import express from 'express';

const router = express.Router();

router.get('/repo', async (req, res) => {
  try {
    res.send('output');
  } catch (err) {
    res.status(400).send(err);
  }
});

export { router as repoRoute };
