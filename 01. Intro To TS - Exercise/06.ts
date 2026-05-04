function customTypeGuard(arg: unknown): arg is string[] {

    return Array.isArray(arg) 
        && arg.length > 0 
        && arg.every(el => typeof el === 'string');
}

let arr: unknown = ['Andrey', 'Stoyanoff']; 

if (customTypeGuard(arr)) {
    console.log(arr.length); //* 2
}