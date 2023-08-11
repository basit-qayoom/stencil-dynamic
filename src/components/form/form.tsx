import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-form',
  shadow: true,
})
export class MyForm {
  render() {
    return (
      <div>
        <hr />
        <h3>Form component</h3>
        <slot></slot>
        <hr />
      </div>
    );
  }
}
