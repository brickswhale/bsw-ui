import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'bsw-button',
  styleUrl: 'bsw-button.css',
  shadow: true,
})

export class BswButton {
  @Prop() class: string;

  
  onClick = () => {

  }

  render() {
    return (
      <button class={`bsw-button-primary ${this.class}`} onClick={this.onClick}><slot></slot></button>
    );
  }

}
