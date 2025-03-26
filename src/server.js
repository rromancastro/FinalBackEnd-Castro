import express from 'express';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views-router.js';
import path from 'path';
import { initMongoDB } from './config/db-connection.js';

const app = express();

app.engine('handlebars', handlebars.engine());

app.set('views', path.join(`${process.cwd()}/src/views`));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(`${process.cwd()}/src/public`)));
app.use(express.json());
app.use('/', viewsRouter);

initMongoDB()
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.log(error);
  });


app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
