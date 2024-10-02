function hasPairWithSum(arr, k) {
    const seen = new Set();

    for (const num of arr) {
        const complement = k - num;
        if (seen.has(complement)) {
            return true;
        }
        seen.add(num);
    }

    return false;
}
