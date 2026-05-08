class Person {

    firstName: string;
    lastName: string;
    age: number;

    constructor(fn: string, ln: string, age: number) {

        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }

    introduce(): string {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
}
const person = new Person("A", "Stoyanoff", 41);
console.log(person.introduce());