// O(n)

function linearSearch(array, target) {
    for (let i = 0 ; i < array.length ; i++)
        if (array[i] === target)    return i

    return -1
}

const numbers = [-5, 2, 10, 4, 6]

console.log(linearSearch(numbers, 10)) // 2
console.log(linearSearch(numbers, 6)) // 4
console.log(linearSearch(numbers, 20)) // -1