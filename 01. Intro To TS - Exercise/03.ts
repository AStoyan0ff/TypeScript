function convertArrays(arr: string[]): [string, number] {

    let concatedText = arr.join('');

    return [
        concatedText,
        concatedText.length
    ];
}

console.log(convertArrays(['How', 'are', 'you?']));
console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));

