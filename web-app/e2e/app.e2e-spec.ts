import { AppPage } from './app.po'

describe('web-app App', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual("Hi, I'm Weather Bot!")
  })
})
