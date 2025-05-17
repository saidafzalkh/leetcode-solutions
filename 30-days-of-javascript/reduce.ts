type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let accum = init;
    for(let val of nums) {
        accum = fn(accum, val);
    }

    return accum;
};
