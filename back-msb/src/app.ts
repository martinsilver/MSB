import express from 'express';
import path from 'path';
import router from './controllers/routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, "../..","front-msb","build")));
    this.app.use(express.static(path.join(__dirname, "../..","front-msb", "public")));
    this.app.use(router);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);

  }


  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Server na port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
