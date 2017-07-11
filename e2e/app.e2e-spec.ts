import { GoneInSixtySecondsPage } from './app.po';

describe('gone-in-sixty-seconds App', () => {
  let page: GoneInSixtySecondsPage;

  beforeEach(() => {
    page = new GoneInSixtySecondsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
