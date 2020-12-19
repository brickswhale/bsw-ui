import { newSpecPage } from '@stencil/core/testing';
import { BswContainer } from '../bsw-container';

describe('bsw-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BswContainer],
      html: `<bsw-container></bsw-container>`,
    });
    expect(page.root).toEqualHtml(`
      <bsw-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bsw-container>
    `);
  });
});
