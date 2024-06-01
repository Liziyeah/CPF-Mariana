import FormVinil from "../components/Form/form";
import { changeScreen } from "../store/actions";
import { addObserver, dispatch } from "../store/store";
import css from './home.css'
export class Home extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        addObserver(this);
	}

	async connectedCallback() {
        const modifyVinil = this.shadowRoot?.querySelector('#addvinils');
		if (modifyVinil) {
			modifyVinil.addEventListener('click', () => {
				dispatch(changeScreen('ADDVINILS'));
			});
		}
		this.render();

	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
            
            const text = this.ownerDocument.createElement('h1');
            text.innerText = 'Vinyl Store';
            this.shadowRoot?.appendChild(text);

            const addVinils = this.ownerDocument.createElement('button');
            addVinils.className = 'ola'
            addVinils.innerHTML = 'Add Product';
            this.shadowRoot?.appendChild(addVinils);

            const addVinil = this.shadowRoot?.querySelector('.ola');
         
            if (addVinil) {
                addVinil.addEventListener('click', () => {         
                    dispatch(changeScreen('ADDVINILS'));
                });
            }
            const modifyVinila = this.ownerDocument.createElement('button');
            modifyVinila.className = 'modify'
            modifyVinila.innerHTML = 'Modify Product';
            this.shadowRoot?.appendChild(modifyVinila);

            const modifyVinil = this.shadowRoot?.querySelector('.modify');
         
            if (modifyVinil) {
                modifyVinil.addEventListener('click', () => {         
                    dispatch(changeScreen('MODIFYVINILS'));
                });
            }
            const styles = document.createElement('style');
			styles.innerHTML = css;
			this.shadowRoot.appendChild(styles);

            
		}
	}
}

customElements.define('app-home', Home);