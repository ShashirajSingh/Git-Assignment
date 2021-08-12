import express, { Application } from 'express';
import { repoRoute } from './repoRoute';
import { userRoute } from './userRoute';

const app: Application = express();

app.use('/repo', repoRoute);
app.use('/user', userRoute);

export { app as routes };
