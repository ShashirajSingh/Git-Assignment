import express, { Application } from 'express';

const app: Application = express();
const port: number = 3000;

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
