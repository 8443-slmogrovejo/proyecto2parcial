import { Component, Listen } from '@stencil/core';

@Component({
    tag: 'scroll-s'
})
export class MyComponent2 {
    @Listen('keydown', { target: 'window' })
    handleKeyDown(ev: KeyboardEvent) {
      if (ev.key === 's') {
        
        const sectionId2 = 'services';
        const sectionElement2 = document.getElementById(sectionId2);
        if (sectionElement2) {
            sectionElement2.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
}