'use strict';

// import * as cheerio from 'cheerio';
import { app, assert } from 'egg-mock/bootstrap';

describe('test/app/controller/news.test.ts', () => {
  // it('should GET /news', async () => {
  //   const result = await app.httpRequest().get('/news').expect(200);
  //   const $ = cheerio.load(result.text);
  //   const listItem = $('.news-view .item');
  //   assert(listItem.length === app.config.news.pageSize);
  // });


  it('should GET /api/topics/topics', async () => {
    const result = await app.httpRequest().get('/api/topics/topics').expect(200);
    const code = result.body.statue;
    assert(code === 200);
  });
});
