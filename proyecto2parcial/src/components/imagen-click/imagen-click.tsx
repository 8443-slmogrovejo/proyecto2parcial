import { Component, h } from '@stencil/core';

@Component({
  tag: 'toggle-button'
})
export class ToggleButton {
  componentWillLoad() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    }
  }

  handleClick() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', currentTheme);
  }

  render() {
    return (
      <button id="toggleButton" onClick={() => this.handleClick()}>
        Toggle
      </button>
    );
  }
}