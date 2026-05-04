function checkSum(x: number, y: number, z: number): boolean {

    return (x + y + z) % 2 === 0;
}

console.log(checkSum(1, 2, 3));
console.log(checkSum(2, 2, 3));