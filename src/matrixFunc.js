//Make a function that takes a number n, and returns a two-dimensional
// array with length n*n, with 2 on the diagonal and 1 on the top and bottom of
// the resulting segment

function bar(n) {
    const arr = new Array(n).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            if (i === j || i === n - j - 1) {
                arr[i][j] = 2;
            } else if (i === 0 || i === n - 1 || j === n - j - 1) {
                arr[i][j] = 1;
            }
        }
    }

    return arr;
}

console.log(bar(5));
console.log(bar(4));
