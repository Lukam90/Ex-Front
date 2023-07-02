// O(n^2)
function quickSort(array) {
    if (array.length < 2)   return array

    let lastIndex = array.length - 1

    let pivot = array[lastIndex]
    let left = []
    let right = []

    for (let i = 0 ; i < lastIndex ; i++) {
        let number = array[i]

        if (number < pivot) {
            left.push(number)
        } else {
            right.push(number)
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const array = [8, 20, -2, 4, -6]

console.log(quickSort(array))