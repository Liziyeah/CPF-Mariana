import FormVinil from "../components/Form/form";
import { addObserver } from "../store/store";
import { AttributeVinil } from "../components/Vinil.ts/vinil";
import Vinil from "../components/Vinil.ts/vinil";
import { getVinils } from "../services/firebase";
export class ModifyVinils extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        addObserver(this)
	}

	async connectedCallback() {
		this.render();
	}

	async render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
           <h1>Modify Vinyls</h1>
			`;
            if (this.shadowRoot)
			this.shadowRoot.innerHTML = /*html*/ ``;
            const sectionCards = document.createElement('section');
            const vinilsArray = await getVinils();
            vinilsArray.forEach((card: any) => {
                const vinilCard = document.createElement('my-vinil') as Vinil;
                vinilCard.setAttribute(AttributeVinil.image, card.image);
                vinilCard.setAttribute(AttributeVinil.name, card.name);
                vinilCard.setAttribute(AttributeVinil.artist, card.artist);
                vinilCard.setAttribute(AttributeVinil.price, card.price);
                vinilCard.setAttribute(AttributeVinil.stock, card.stock);
                sectionCards.appendChild(vinilCard);
                this.shadowRoot?.appendChild(sectionCards);
            });
		}
	}
}

customElements.define('app-modify', ModifyVinils);