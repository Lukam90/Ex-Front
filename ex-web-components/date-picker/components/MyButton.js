export default class MyButton extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: "closed" });

        this.shadow.innerHTML = `
        <style>
        :host {
            --bg: #000;
        }

        button {
            border: none;
            background: var(--bg);
            color: #fff;
            border-radius: 3px;
            padding: 3px 10px;
        }
        </style>

        <slot name="outbutton"></slot>

        <button><slot name="inbutton" /></button>
        `
    }

    connectedCallback() {
        
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        
    }
}
