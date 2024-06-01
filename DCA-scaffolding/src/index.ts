import "./components/export"
import { appState } from "./store/store";
import { Home } from "./screens/Home";
import { AddVinils } from "./screens/AddVinils";
import { ModifyVinils } from "./screens/ModifyVinils";
import { addObserver } from "./store/store";
import './screens/Home'
import './screens/AddVinils'
import './screens/ModifyVinils'

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
        console.log(appState.screen);
        
		switch (appState.screen) {
			case 'HOME':
				const dashboard = this.ownerDocument.createElement('app-home') as Home;
				this.shadowRoot?.appendChild(dashboard);
                break;

            case 'ADDVINILS':
                const addVinils = this.ownerDocument.createElement('app-add') as AddVinils;
                this.shadowRoot?.appendChild(addVinils);
                break;

            case 'MODIFYVINILS':
                const modifyVinils = this.ownerDocument.createElement('app-modify') as ModifyVinils;
                this.shadowRoot?.appendChild(modifyVinils);
                break;
		}
    }
}

customElements.define('app-container', AppContainer)