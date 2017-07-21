import { browser, by, element } from 'protractor';

export class CarListPage {
  navigateTo() {
    return browser.get('/');
  }

  checkFirstCheckbox() {
    element.all(by.css('md-checkbox')).get(0).click();
  }

  getFirstCheckbox() {
    return element.all(by.css('input')).get(0);
  }
}
