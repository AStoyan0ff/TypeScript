class Employee {

    public name: string;
    protected position: string;
    private salary: number;

    constructor(name: string, position: string, salary: number) {

        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    }

    showSalary(): string {
        return `Salary: $${this.salary}`;
    }
}

const e = new Employee('AStoyanoff', 'Software Engineer', 5000);

console.log(e.getDetails());
console.log(e.showSalary());
console.log(e.name);
