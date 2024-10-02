const computePowerIt = (n, p) => {
    if (p < 0 || !Number.isInteger(p)) {
        return 0;
    }

    let result = 1;
    
    for (let i = 0; i < p; i++) {
        result *= n;
    }

    return result;
}

console.log(computePowerIt(3, 3));
