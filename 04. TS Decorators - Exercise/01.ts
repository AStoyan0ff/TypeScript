function log(target: object,  methodName: string, descriptor: PropertyDescriptor ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {

        console.log( `Function '${methodName}' called with arguments: ${args.join(', ')}`);
        return originalMethod.call(this, ...args);
    };

    return descriptor;
}

class Person {

    constructor(
        public fName: string,
        public lName: string
    ) {}

    @log
    static getFullName(fName: string, lName: string) {
        return `${fName} ${lName}`;
    }
}

let person = new Person('John', 'Does');

Person.getFullName(person.fName, person.lName);
Person.getFullName('Benny', 'Tres');

export {};