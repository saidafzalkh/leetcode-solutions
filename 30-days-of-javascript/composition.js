type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        x = functions.reduceRight((acc, curr) => curr(acc), x)
        return x;
    }
};
