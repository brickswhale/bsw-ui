import { newSpecPage } from '@stencil/core/testing';
import { BswButton } from '../bsw-button';

describe('bsw-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BswButton],
      html: `<bsw-button></bsw-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bsw-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bsw-button>
    `);
  });
});
