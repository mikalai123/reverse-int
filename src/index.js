module.exports = function reverse (n) {
    n = Math.abs(n);
    num = String(n).split("").reverse().join("");
    return num
}
