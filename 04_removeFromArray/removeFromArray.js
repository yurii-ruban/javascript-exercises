const removeFromArrayCStyle = function(array, ...args) {
    for (arg of args) {
        let pos = array.indexOf(arg);
        while (pos !== -1) {
            array.splice(pos, 1);
            pos = array.indexOf(arg);
        }
    }
    return array;
};

const removeFromArray = function (array, ...args) {
    return array.filter(val => !args.includes(val));
}

// Do not edit below this line
module.exports = removeFromArray;
