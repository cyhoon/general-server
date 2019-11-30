import { Context } from 'koa';
import { Service } from 'typedi';

@Service()
export class PostController {
  public getPosts(ctx: Context) {
    const posts = [
      {
        id: "5",
        title: "숫자 5"
      },
      {
        id: "4",
        title: "숫자 4"
      },
      {
        id: "3",
        title: "숫자 3"
      },
      {
        id: "2",
        title: "숫자 2"
      },
      {
        id: "1",
        title: "숫자 1"
      }
    ];

    ctx.status = 200;
    ctx.body = {
      posts
    };
  }
}
