import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  shadow: true,
})
export class MyButton {

  render() {
    return (
      <button>
        Hey click me
      </button>
    );
  }
}
