function getText(element) {
    return element.textContent || element.innerText;
}

function addTextCell(row, value) {
    let cell = document.createElement("td");
    cell.textContent = value;

    row.appendChild(cell);
}

function addHTMLCell(row, htmlContent) {
    let cell = document.createElement("td");
    cell.innerHTML = htmlContent;

    row.appendChild(cell);
}

function toggleSort(th, values, column) {
    if (th.dataset.order == "asc") {
        th.dataset.order = "desc";

        values = values.sort((a,b) => a[column] > b[column] ? 1 : -1);
    } else {
        th.dataset.order = "asc";

        values = values.sort((a,b) => a[column] < b[column] ? 1 : -1);
    }
}