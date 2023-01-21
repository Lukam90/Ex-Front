// Recursive Fibonacci

const recursiveFibonacci = (n, memo = {}) => {
    if (n in memo)  return memo[n];
    if (n <= 2) return 1;

    memo[n] = recursiveFibonacci(n - 1, memo) + recursiveFibonacci(n - 2, memo);

    return memo[n];
};

console.log(recursiveFibonacci(6)); // 8
console.log(recursiveFibonacci(7)); // 13
console.log(recursiveFibonacci(8)); // 21
console.log(recursiveFibonacci(50)); // 12586269025

// Tabular Fibonacci

const tabularFibonacci = (n) => {
    const table = Array(n + 1).fill(0);

    table[1] = 1;

    for (let i = 0 ; i <= n ; i++)
    {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[n];
};

console.log(tabularFibonacci(6)); // 8
console.log(tabularFibonacci(7)); // 13
console.log(tabularFibonacci(8)); // 21
console.log(tabularFibonacci(50)); // 12586269025