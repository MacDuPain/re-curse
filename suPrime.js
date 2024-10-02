const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const nextPrime = (n) => {
    if (n < 2) {
        return 2;
    }

    while (!isPrime(n)) {
        n++;
    }

    return n;
}

console.log(nextPrime(1));
