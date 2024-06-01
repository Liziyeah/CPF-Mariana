export enum AttributeVinil {
    'image' = 'image',
    'name' = 'name',
    'artist' = 'artist',
    'price' = 'price',
    'stock' = 'stock',
}

export default class Vinil extends HTMLElement {
    image?: string;
    name?: string;
    artist?: string;
    price?: number;
    stock?: number

    constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

    static get observedAttributes() {
		const attrs: Record<AttributeVinil, null> = {
			image: null,
			name: null,
			artist: null,
            price: null,
            stock: null
		};
		return Object.keys(attrs);
	}

  attributeChangedCallback(propName: AttributeVinil, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case AttributeVinil.price:
				this.price = newValue ? Number(newValue) : undefined;
				break;
      case AttributeVinil.stock:
        this.stock = newValue ? Number(newValue) : undefined;
        break;

			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}
  
    connectedCallback() {
		this.render();
	}

    render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML =  `
                <p>Nombre: ${this.image}</p>
                <p>Color: ${this.name}</p>
                <p>Letra: ${this.artist}</p>
                <p>Letra: ${this.price}</p>
                <p>Letra: ${this.stock}</p>
            `;
		}
	}
}

customElements.define("my-vinil", Vinil);