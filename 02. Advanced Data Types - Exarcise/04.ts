type Operation = 'Index' | 'Length' | 'Add';

function operator(

    param: string | number | string[],
    operation: Operation,
    operand: number
    
): string | number {

    if (operation === 'Add') {
        return Number(param) + operand;
    }

    if (typeof param === 'number') {
        return 'Invalid operation';
    }

    if (operation === 'Index') {
        return param[operand];
    }

    return param.length % operand;
}

console.log(operator(['First', 'Second', 'Third'], 'Index', 1));
console.log(operator('string', 'Index', 1));
console.log(operator(['Just', 'Two'], 'Length', 5));
console.log(operator('short string1', 'Length', 5));
console.log(operator('7', 'Add', 3));
console.log(operator(11, 'Add', 3));