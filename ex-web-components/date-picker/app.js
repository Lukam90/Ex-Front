import DatePicker from "./components/DatePicker.js";
import MyButton from "./components/MyButton.js";
import SecondTimer from "./components/SecondTimer.js";

customElements.define("date-picker", DatePicker, { extends: "input" });
customElements.define("my-button", MyButton);
customElements.define("second-timer", SecondTimer);

const addBtn = document.querySelector("#add-btn");
const myButton = document.querySelector("my-button");
const secondTimer = document.querySelector("second-timer");

addBtn.addEventListener("click", () => {
    secondTimer.setAttribute("prefix", "Exemple");
});