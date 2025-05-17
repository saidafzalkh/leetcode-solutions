/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let ans = [];
    for (let [i, num] of arr.entries()) {
        ans.push(fn(num, i));
    };
    return ans;
};
