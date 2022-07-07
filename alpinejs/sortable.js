document.addEventListener("alpine:init", () => {
    Alpine.data("catData", () => ({
        cats: null,
        sortColumn: null,
        sortAsc: false,
        pageSize: 4,
        currentPage: 1,

        async init() {
            let response = await fetch("data/cats.json")
            let data = await response.json();

            data.forEach((element, index) => element.id = index);

            this.cats = data;
        },

        nextPage() {
            if ((this.currentPage * this.pageSize) < this.cats.length) {
                this.currentPage++;
            }
        },

        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },

        sort(column) {
            if (this.sortColumn === column) {
                this.sortAsc = ! this.sortAsc;
            }

            this.sortColumn = column;

            this.cats.sort((a, b) => {
                if (a[this.sortColumn] < b[this.sortColumn]) {
                    return this.sortAsc ? 1 : -1;
                }

                if (a[this.sortColumn] > b[this.sortColumn]) {
                    return this.sortAsc ? -1 : 1;
                }

                return 0;
            });
        },

        get pagedCats() {
            if (this.cats) {
                return this.cats.filter((row, index) => {
                    let start = (this.currentPage - 1) * this.pageSize;
                    let end = this.currentPage * this.pageSize;

                    if (index >= start && index < end)  return true;
                })
            } else {
                return [];
            }
        }
    }))
});