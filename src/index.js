module.exports = function reverse (n) {
    n = Math.abs(n);
    num = String(n).split("").reverse().join("");
    // if(num[0] == " - ") {
    //     num = num.shift();
    //   }
    return num
}
