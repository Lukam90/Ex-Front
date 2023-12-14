export default class SecondTimer extends HTMLElement {
    static get observedAttributes() { return ["prefix"]; }

    constructor() {
        super();

        this.counter = 0;

        this.span = document.createElement("span");
        this.span.classList.add("badge");
        this.span.classList.add("badge-secondary");
        this.span.innerHTML = this.counter;

        this.$prefix = document.createElement("span");

        this.appendChild(this.$prefix);
        this.appendChild(this.span);
    }

    connectedCallback() {
        this.timer = window.setInterval(() => {
            this.counter++;
            this.span.innerHTML = this.counter;
        }, 1000);
    }

    disconnectedCallback() {
        clearInterval(this.timer);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "prefix" && oldValue !== newValue) {
            this.$prefix.innerHTML = newValue + " : ";
        }
    }
}
