import { Context } from 'koa';
import { Service } from 'typedi';

import { LogService } from '../services';

@Service()
export class AuthController {
  constructor(private logService: LogService) {}

  public signup = async (ctx: Context) => {
    const { userId, password, userName } = ctx.request.body;

    try {
      throw new Error("Test Error");

      // ... 회원가입을 로직을 탄다. ( 생략 )

      ctx.status = 200;
      ctx.body = {
        message: "success",
        user: {
          id: userId,
          name: userName
        }
      };
      return;
    } catch (error) {
      const { method, url, header } = ctx.request;

      this.logService.error({
        method,
        url,
        header,
        apiName: `[${method}]-${url}`,
        message: error.message
      });

      ctx.status = 500;
      ctx.body = {
        message: "server-error"
      };
      return;
    }
  };
}
