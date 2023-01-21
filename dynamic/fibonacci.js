const fib = (n) => {
    const table = Array(n + 1).fill(0);

    table[1] = 1;

    for (let i = 0 ; i <= n ; i++)
    {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[n];
};

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21

const start = Date.now();

console.log(fib(50)); // 12586269025

const end = Date.now();

console.log(`T = ${(end - start)} ms`);