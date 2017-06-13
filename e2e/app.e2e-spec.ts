import { OaFePage } from './app.po';

describe('oa-fe App', () => {
  let page: OaFePage;

  beforeEach(() => {
    page = new OaFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
