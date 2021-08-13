import express, { Application } from 'express';
import mongoose from 'mongoose';
import { routes } from './routes/index';

const app: Application = express();
const port = process.env.PORT;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/', routes);
mongoose.connect(
  `${process.env.DB_URL}`,
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
