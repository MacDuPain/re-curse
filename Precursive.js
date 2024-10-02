const computePowerRec = (n, p) => {
    if (p < 0 || !Number.isInteger(p)) {
        return 0;
    }

    if (p === 0 || p === 1) {
        return n;
    }

    return n * computePowerRec(n, p-1);
}

console.log(computePowerRec(0, 3))