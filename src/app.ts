import express, { Application } from 'express';
import mongoose from 'mongoose';

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.connect(
  `mongodb://localhost:27017/deqode-dev`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  () => {
    console.log('connected to mongoose...');
  }
);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
