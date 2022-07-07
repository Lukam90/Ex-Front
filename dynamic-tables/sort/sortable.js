function sort(event) {
    const lines = document.querySelectorAll("tbody > tr");

    const th = event.target;

    const column = th.dataset.column;

    let values = [];

    for (let line of lines) {
        let cells = line.querySelectorAll("td");

        let id = getText(cells[0]);
        let name = getText(cells[1]);
        let age = getText(cells[2]);
        let occupation = getText(cells[3]);

        values.push({ id, name, age, occupation });
    }

    toggleSort(th, values, column);

    buildTable(values);
}

function buildTable(values) {
    const table = document.querySelector("tbody");

    const fragment = new DocumentFragment();

    table.textContent = "";

    for (let value of values) {
        let row = document.createElement("tr");

        addTextCell(row, value.id);
        addHTMLCell(row, `<b>${value.name}</b>`);
        addTextCell(row, value.age);
        addTextCell(row, value.occupation);

        fragment.appendChild(row);
    }

    table.appendChild(fragment);
}