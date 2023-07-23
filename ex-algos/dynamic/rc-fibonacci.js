function fibonacci(n, memo = {}) {
    if (n in memo)  return memo[n]

    if (n <= 2)    return 1

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)

    return memo[n]
}

console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(50));