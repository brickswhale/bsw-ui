import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bsw-container',
  styleUrl: 'bsw-container.css',
  shadow: true,
})
export class BswContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
