function squares(n, values = []) {
    if (values[n] != null) {
        return values[n];
    }

    let result = 0;

    for (let i = 1 ; i <= n ; i++) {
        for (let j = 1 ; j <= n ; j++) {
            result += 1;
        }
    }

    values[n] = result;

    return result;
}

console.log(squares(30000));
console.log(squares(30000));
console.log(squares(30000));
console.log(squares(30000));
console.log(squares(30000));