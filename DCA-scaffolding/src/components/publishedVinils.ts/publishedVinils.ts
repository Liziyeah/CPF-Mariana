import { VinilInfo } from "../../types/Vinil";
import { addVinil } from "../../services/firebase";
import Vinil, { AttributeVinil } from "../Vinil.ts/vinil";
import { getVinils } from "../../services/firebase";
const formData: Omit<VinilInfo, 'id'> = {
	image: '',
    name: '',
    artist: '',
    price: 0,
    stock: 0,
};

class Published extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		// addObserver(this);
	}

	connectedCallback() {
		this.render();
		const button = this.shadowRoot?.querySelector('button');
		button?.addEventListener('click', () => {});
	}

	async render() {
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

export default Published;
customElements.define('app-published', Published);