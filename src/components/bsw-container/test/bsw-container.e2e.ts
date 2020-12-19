import { newE2EPage } from '@stencil/core/testing';

describe('bsw-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bsw-container></bsw-container>');

    const element = await page.find('bsw-container');
    expect(element).toHaveClass('hydrated');
  });
});
