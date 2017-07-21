import { browser } from 'protractor';
import { CarListPage } from './app.po';

describe('gone-in-sixty-seconds App', () => {
  let page: CarListPage;

  beforeEach(() => {
    page = new CarListPage();
  });

  it('should be able to check a checkbox', () => {
    page.navigateTo();

    browser.pause();

    page.checkFirstCheckbox();

    browser.pause();

    expect(page.getFirstCheckbox().getAttribute('checked')).toBeTruthy();
  });
});
