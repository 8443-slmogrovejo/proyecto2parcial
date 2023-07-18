import { Component, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'calificacion-peli',
  styleUrl: 'calificacion-peli.css'
})
export class MyComponent {
  @State() isHidden: boolean = true;

  @Listen('mouseover')
  handleMouseOver() {
    this.isHidden = false;
  }

  @Listen('mouseout')
  handleMouseOut() {
    this.isHidden = true;
  }

  render() {
    return (
      <div>
        <p onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>Con Nosotros...</p>
        {!this.isHidden && <p>¡Descubre una nueva experiencia cinematográfica en nuestro sitio de películas! Sumérgete en un mundo lleno de emocionantes historias, increíbles efectos visuales y actuaciones cautivadoras. Desde clásicos atemporales hasta los últimos estrenos, tenemos una amplia selección de películas de todos los géneros para satisfacer todos los gustos.</p>}
      </div>
    );
  }
}