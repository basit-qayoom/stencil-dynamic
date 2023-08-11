import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-app',
  shadow: true,
})
export class MyApp {
  @State() inputValue: string = '';

  handleInputChange(value: string) {
    this.inputValue = value;
  }
  render() {
    return (
      <div>
        Hello from my-app!
        <my-form>
          <my-input onInputChange={value => this.handleInputChange(value)} />
          <my-button />
          <my-text inputValue={this.inputValue} />
        </my-form>
      </div>
    );
  }
}
