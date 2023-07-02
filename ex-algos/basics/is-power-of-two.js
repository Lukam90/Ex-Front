// O(log n)

function isPowerOfTwo(n) {
    if (n < 1)  return false

    while (n > 1) {
        if (n % 2 !== 0) return false

        n /= 2
    }

    return true
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false

// O(1)

function isBitwisePowerOfTwo(n) {
    if (n < 1)  return false

    return (n & (n - 1)) === 0
}

console.log(isBitwisePowerOfTwo(1)) // true
console.log(isBitwisePowerOfTwo(2)) // true
console.log(isBitwisePowerOfTwo(5)) // false