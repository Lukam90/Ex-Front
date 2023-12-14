export default class DatePicker extends HTMLInputElement {
    constructor() {
        super();
        this.counter = 0;
    }

    connectedCallback() {
        this.calendar = flatpickr(this);
    }

    disconnectedCallback() {
        this.calendar.destroy();
    }
}
