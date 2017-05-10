import { Test00Page } from './app.po';

describe('test00 App', () => {
  let page: Test00Page;

  beforeEach(() => {
    page = new Test00Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
