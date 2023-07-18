import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'evento-click'
})
export class MyButton {
  @Event() customClick: EventEmitter<void>;

  handleClick() {
    this.customClick.emit();
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}><i class="bi bi-moon-stars"></i></button>
    );
  }
}