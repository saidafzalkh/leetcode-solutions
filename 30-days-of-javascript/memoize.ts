type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    let cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if (key in cache) return cache[key];
        return cache[key] = fn(...args);
    }
}
