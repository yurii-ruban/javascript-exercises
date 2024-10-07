const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
const palindromes = function (str) {
    const cleaned = str.toLowerCase()
                        .split("")
                        .filter((val) => ALPHABET.includes(val))
                        .join("");

    for (let i = 0; i < cleaned.length / 2; ++i) {
        if (cleaned[i] != cleaned[cleaned.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
