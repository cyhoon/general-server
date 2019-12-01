import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import kcors from 'koa-cors';
import Router from 'koa-router';
import Container from 'typedi';

import { Routes } from './controllers';

class Server {
  private app: Koa;
  private router: Router;

  constructor() {
    this.app = new Koa();
    this.router = new Router();

    this.setMiddlewares();
    this.setRoutes();
  }

  private setMiddlewares() {
    this.app.use(kcors());
    this.app.use(BodyParser());
  }

  private setRoutes() {
    this.router.use("/api", Container.get(Routes).getRoutes());

    this.app.use(this.router.routes());
    this.app.use(this.router.allowedMethods());
  }

  public async run(port: string = "4000"): Promise<void> {
    this.app.listen(port);

    console.log(`Server application is up and running on port ${port}`);
  }
}

export default Server;
