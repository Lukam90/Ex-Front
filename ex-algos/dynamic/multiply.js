function multiply(number) {
    const cache = {}

    if (number in cache)   return cache[number]

    const result = number * 10

    cache[number] = result

    return result
}

console.log(multiply(10))
console.log(multiply(15))
console.log(multiply(20))