import 'reflect-metadata';

import { Context } from 'koa';
import Router from 'koa-router';
import { Service } from 'typedi';

import { AuthController } from './auth.controller';
import { PostController } from './post.controller';

@Service()
export class Routes {
  private router: Router;

  constructor(
    private postController: PostController,
    private authController: AuthController
  ) {
    this.router = new Router();
    this.setRoutes();
  }

  private setRoutes() {
    this.router.get("/posts", this.postController.getPosts);
    this.router.get("/posts/:id", this.postController.getPost);
    this.router.post("/auth/signup", this.authController.signup);

    this.router.all("*", (ctx: Context) => {
      ctx.status = 404;
      ctx.body = "존재하지 않는 API 입니다";
    });
  }

  public getRoutes() {
    return this.router.routes();
  }
}
