const repeatString = function(str, count) {
    if (count < 0 ) return "ERROR";
    if (count == 0) return "";

    let result = "";
    for (let i = 0; i < count; ++i) {
        result += str;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
