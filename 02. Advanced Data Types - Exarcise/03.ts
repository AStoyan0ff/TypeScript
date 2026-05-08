function optionalMultiplier(

    a?: string | number,
    b?: string | number,
    c?: string | number

): number {

    const values = [a, b, c]
        .filter(x => x !== undefined)
        .map(Number);

    if (values.length === 0) {
        return 1;
    }

    return values.reduce((val, curr) => val * curr);
}

console.log(optionalMultiplier('3', 5, '10'));
console.log(optionalMultiplier('2', '2'));
console.log(optionalMultiplier(2, 3));
console.log(optionalMultiplier(7,'2'));
console.log(optionalMultiplier());