import { init } from './main';

describe('Root Component Test', () => {
  it('If there is no root element', () => {
    const isApp = init();

    expect(isApp).toBe(false);
  });
});
