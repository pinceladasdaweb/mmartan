import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import { Routes } from './routes/products';
import { DB_URI } from './utils/config';

class App {
  public app: express.Application;
  public productRoutes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.productRoutes.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: false
    }));
    this.app.use(helmet());
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(DB_URI, { useNewUrlParser: true }, err => {
      if (err) throw err;
      console.log('Successfully connected to database.');
    });
  }
}

export default new App().app;
