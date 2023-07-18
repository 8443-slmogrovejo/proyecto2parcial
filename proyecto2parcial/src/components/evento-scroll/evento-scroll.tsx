import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'scroll-p'
})
export class MyComponent {
  @Listen('keydown', { target: 'window' })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'p') {
      
      const sectionId = 'portfolio';
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}

