type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
};
