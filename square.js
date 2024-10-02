const computeSquareRoot = (n) => {
    if (n === 0 || n < 0) {
        return 0;
    }

    return Math.sqrt(n);
}

console.log(computeSquareRoot(25))