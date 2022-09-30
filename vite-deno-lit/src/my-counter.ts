import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js'

@customElement('my-counter')
export class MyElement extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      button {
        width: 3rem;
        height: 3rem;
        padding: 1rem;
        font-size: 1.5rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: #eee;
        border: none;
        border-radius: 1rem;
        cursor: pointer;
      }
      .buttons {
        display: flex;
        gap: 1rem;
      }
    `
  ];

  @state()
  _count = 0;

  _increment() {
    this._count++;
  }

  _decrement() {
    this._count--;
  }
  

  render() {
    return html`
    <p>Clicked: ${this._count}</p>
    <div class="buttons">
      <button @click=${this._decrement}>-</button>
      <button @click=${this._increment}>+</button>
    </div>
    `;
  }
}
