import { WebscrapPage } from './app.po';

describe('webscrap App', () => {
  let page: WebscrapPage;

  beforeEach(() => {
    page = new WebscrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
