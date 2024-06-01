import FormVinil from "../components/Form/form";
import { VinilInfo } from "../types/Vinil";
import { addVinil } from "../services/firebase";
import { addObserver } from "../store/store";

const formData: Omit<VinilInfo, 'id'> = {
    image: '',
    name: '',
    artist: '',
    price: 0,
    stock: 0,
}

export class AddVinils extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        addObserver(this);
	}

	async connectedCallback() {
		this.render();
	}

    addImage(e: any) {
        formData.image = e.target?.value;
    }

    addName(e: any) {
        formData.image = e.target?.value;
    }

    addArtist(e: any) {
        formData.image = e.target?.value;
    }

    addPrice(e: any) {
        formData.image = e.target?.value;
    }

    addStock(e: any) {
        formData.image = e.target?.value;
    }

    submitForm() {
		addVinil(formData);
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
           <h1>Add Vinyls</h1>
			`;
            const text = this.ownerDocument.createElement('h1');
		text.innerText = 'Add New Product';
		this.shadowRoot?.appendChild(text);

        const image = this.ownerDocument.createElement('input');
		image.type = 'image';
		image.addEventListener('change', this.addImage);
		this.shadowRoot?.appendChild(image);

        const name = this.ownerDocument.createElement('input');
		name.type = 'text';
		name.placeholder = 'Nombre';
		name.addEventListener('change', this.addName);
		this.shadowRoot?.appendChild(name);

        const artist = this.ownerDocument.createElement('input');
		artist.type = 'text';
		artist.placeholder = 'Artista';
		artist.addEventListener('change', this.addArtist);
		this.shadowRoot?.appendChild(artist);

        const price = this.ownerDocument.createElement('input');
		price.type = 'text';
		price.placeholder = 'Precio';
		price.addEventListener('change', this.addPrice);
		this.shadowRoot?.appendChild(price);

        const stock = this.ownerDocument.createElement('input');
		stock.type = 'text';
		stock.placeholder = 'Cantidad en stock';
		stock.addEventListener('change', this.addStock);
		this.shadowRoot?.appendChild(stock);

        const save = this.ownerDocument.createElement('button');
		save.innerHTML = 'Add Product';
		save.addEventListener('click', this.submitForm);
		this.shadowRoot?.appendChild(save);
		}
	}
}

customElements.define('app-add', AddVinils);