import { Component, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'texto-snacks'
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
        <p onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>En nuestro Snack-Bar...</p>
        {!this.isHidden && <p>¡Descubre nuestra irresistible selección de snacks! En nuestro menú, encontrarás una variedad de delicias tentadoras que satisfarán tus antojos en cualquier momento del día. Desde crujientes papas fritas con sabores exóticos hasta palomitas de maíz dulces y saladas que te harán salivar, tenemos algo para todos los gustos.</p>}
      </div>
    );
  }
}