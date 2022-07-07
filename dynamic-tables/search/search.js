function isFound(textValue, filter) {
    return textValue.toUpperCase().indexOf(filter) > -1;
}

function getText(element) {
    return element.textContent || element.innerText;
}

function search() {
    const input = document.querySelector("#search-input");
    const filter = input.value.toUpperCase();
    const lines = document.querySelectorAll("tbody > tr");

    for (let line of lines) {
        let cells = line.querySelectorAll("td");

        let tdName = cells[0];
        let tdCountry = cells[1];
        
        if (tdName && tdCountry) {
            let hasName = isFound(getText(tdName), filter);
            let hasCountry = isFound(getText(tdCountry), filter);

            if (hasName || hasCountry) {
                line.style.display = "";
            } else {
                line.style.display = "none";
            }
        }
    }
}