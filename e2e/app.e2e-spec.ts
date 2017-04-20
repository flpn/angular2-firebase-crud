import { AngularFirebaseCrudPage } from './app.po';

describe('angular-firebase-crud App', () => {
  let page: AngularFirebaseCrudPage;

  beforeEach(() => {
    page = new AngularFirebaseCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
