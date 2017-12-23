import { AngRouteAppPage } from './app.po';

describe('ang-route-app App', () => {
  let page: AngRouteAppPage;

  beforeEach(() => {
    page = new AngRouteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
