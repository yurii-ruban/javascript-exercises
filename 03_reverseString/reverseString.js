const reverseString = function(str) {
    let arrStr = str.split("");

    for (let i = 0; i < arrStr.length / 2; ++i) {
        let temp = arrStr[i];
        arrStr[i] = arrStr[arrStr.length - 1 - i];
        arrStr[arrStr.length - 1 - i] = temp;
    }

    return arrStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
