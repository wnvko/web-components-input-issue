import { defineComponents, IgcButtonComponent, IgcInputComponent } from 'igniteui-webcomponents';
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Model } from '../services/model';
import { service } from '../services/service';

defineComponents(IgcInputComponent, IgcButtonComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    .element {
      width: 300px;
      margin: 3rem;
    }
  `;

  constructor() {
    super();
    service.get()
      .then(() => this.customer = { id: 'Some Initial Value'});
  }

  @state()
  private customer?: Model;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <form>
        <igc-input value="${ifDefined(this.customer?.id)}" name="customerId" class="element"></igc-input>
        <igc-input value="resets correctly" name="customerId2" class="element"></igc-input>
        <div class="element"><input value="resets correctly" name="customerId3" /></div>
        <igc-button type="reset" class="element">Reset</igc-button>
      </form>
    `;
  }
}

