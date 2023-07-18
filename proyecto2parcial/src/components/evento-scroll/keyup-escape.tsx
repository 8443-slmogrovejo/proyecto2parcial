import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'keyup-escape'
})
export class MyComponent {
  @Listen('keyup', { target: 'window' })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      alert("Gracias por usarnos!");
    }
  }
}