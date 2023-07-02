// Virtually split the array into a sorted and an unsorted part.
// O(n^2)
function insertionSort(array) {
    for (let i = 1 ; i < array.length ; i++) {
        let numberToInsert = array[i]

        let j = i - 1

        while (j >= 0 && array[j] > numberToInsert) {
            array[j + 1] = array[j]

            j--
        }

        array[j + 1] = numberToInsert
    }
}

const array = [8, 20, -2, 4, -6]

insertionSort(array)

console.log(array)
