const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;

    let arr = [0, 1, 1];
    for (let i = 3; i <= Number(n); ++i) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
