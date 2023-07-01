// O(log n)

function binarySearch(array, target) {
    let leftIndex = 0
    let rightIndex = array.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        let value = array[middleIndex]

        if (target === value)  return middleIndex
        else if (target < value)    rightIndex = middleIndex - 1
        else    leftIndex = middleIndex + 1
    }

    return -1
}

const numbers = [-5, 2, 4, 6, 10]

console.log(binarySearch(numbers, 10)) // 4
console.log(binarySearch(numbers, 6)) // 3
console.log(binarySearch(numbers, 20)) // -1