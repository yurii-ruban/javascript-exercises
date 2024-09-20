const leapYears = function(year) {
    let a = year % 4 === 0 && !(year % 100 === 0); // Divisible by 4 and not by 100
    let b = year % 100 === 0 && year % 400 === 0; // Divisible by 100 but also divisible by 400
    return a || b;
};

// Do not edit below this line
module.exports = leapYears;
