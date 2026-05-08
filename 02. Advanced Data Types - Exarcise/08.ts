type Names = {

    fName: string;
    lName: string;
    age: number;
    getPersonInfo(): string;
};

type LocationInfo = {

    city: string;
    street: string;
    number: number;
    postalCode: number;
    getAddressInfo(): string;
};

type CombinedPerson = Names & LocationInfo;

function createCombinedFunction(names: Names, location: LocationInfo) {

    return function (person: CombinedPerson): void {
        console.log(`Hello, ${person.getPersonInfo()} from ${person.getAddressInfo()}`);
    };
}

let names = {

    fName: 'John',
    lName: 'Doe',
    age: 22,

    getPersonInfo() {
        return `${this.fName} ${this.lName}, age ${this.age}`;
    }
};

let info = {

    city: 'Boston',
    street: 'Nowhere street',
    number: 13,
    postalCode: 51225,

    getAddressInfo() {
        return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
    }
};

let combinedFunction = createCombinedFunction(names, info);
let combinedPerson = Object.assign({}, names, info);

combinedFunction(combinedPerson);