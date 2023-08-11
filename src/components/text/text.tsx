import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-text',
  shadow: true,
})
export class MyText {
  @Prop() inputValue: string = '';

  render() {
    return (
      <p>
        Text component content
        <br />
        Input Value: {this.inputValue}
      </p>
    );
  }
}
