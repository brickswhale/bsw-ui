import { newE2EPage } from '@stencil/core/testing';

describe('bsw-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bsw-button></bsw-button>');

    const element = await page.find('bsw-button');
    expect(element).toHaveClass('hydrated');
  });
});
