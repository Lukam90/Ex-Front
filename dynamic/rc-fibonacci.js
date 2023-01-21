const fib = (n, memo = {}) => {
    const start = Date.now();

    if (n in memo)  return memo[n];
    if (n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    const end = Date.now();

    console.log(`T = ${end - start} ms`);

    return memo[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));

const start = Date.now();

console.log(fib(50));

const end = Date.now();

console.log(`T = ${(end - start)} ms`);