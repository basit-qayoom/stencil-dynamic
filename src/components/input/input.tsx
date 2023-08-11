import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-input',
  shadow: true,
})
export class MyInput {
  @Prop() onInputChange: (value: string) => void;
  
  handleInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.onInputChange(newValue);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Enter something..."
        onInput={(event: Event) => this.handleInputChange(event)}
      />
    );
  }
}
