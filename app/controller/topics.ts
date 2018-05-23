import { Controller } from 'egg';

const showRule = {
  tab: { type: 'enum', values: ['ask', 'share', 'job'], required: false },
};

export default class NewsController extends Controller {
  // 定义创建接口的请求参数规则
  public async show() {
    const { ctx } = this;
    ctx.validate(showRule);
    ctx.body = { statue: 200, msg: 'fdafdaf' };
  }

}
