import { Context } from 'koa';
import { Service } from 'typedi';

const posts = [
  {
    id: "5",
    title: "5번째 게시글 입니다",
    content: "5번째 글 내용"
  },
  {
    id: "4",
    title: "4번째 게시글 입니다",
    content: "4번째 글 내용"
  },
  {
    id: "3",
    title: "3번째 게시글 입니다",
    content: "3번째 글 내용"
  },
  {
    id: "2",
    title: "2번째 게시글 입니다",
    content: "2번째 글 내용"
  },
  {
    id: "1",
    title: "1번째 게시글 입니다",
    content: "1번째 글 내용"
  }
];

@Service()
export class PostController {
  public getPosts(ctx: Context) {
    ctx.status = 200;
    ctx.body = {
      posts
    };
  }

  public getPost(ctx: Context) {
    const { id } = ctx.params;

    const post = posts.find(post => post.id === id);

    if (!post) {
      ctx.status = 404;
      ctx.body = {
        message: "해당 아이디로 게시글을 찾지 못했습니다"
      };

      return;
    }

    ctx.status = 200;
    ctx.body = {
      post
    };
  }
}
