// O(n^2)

function bubbleSort(array) {
    let swapped

    do {
        swapped = false

        for (let i = 0 ; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp

                swapped = true
            }
        }
    } while (swapped)
}

const numbers = [8, 20, -2, 4, -6]

bubbleSort(numbers)

console.log(numbers)
