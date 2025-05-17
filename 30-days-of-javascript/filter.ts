type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let ans = [];
    for (let [i, num] of arr.entries()) {
        if (fn(num, i)) ans.push(arr[i]);
    }

    return ans;
};
