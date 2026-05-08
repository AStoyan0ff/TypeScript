class Task {

    title: string;
    description: string;
    completed: boolean = false;

    private createdBy: string;

    constructor(title: string, description: string, createdBy: string) {
        this.title = title;
        this.description = description;
        this.createdBy = createdBy;
    }

    get creator(): string {
        return this.createdBy;
    }

    toggleStatus(): void {
        this.completed = !this.completed;
    }

    getDetails(): string {
        
        return `Task: ${this.title} - ${this.description} - ${this.completed 
            ? "Completed" 
            : "Pending"}`;
    }

    static createSampleTasks(): Task[] {

        return [
            new Task("Buy groceries", "Milk, Bread, Eggs", "Alice"),
            new Task("Study TypeScript", "Finish OOP exercises", "Bob")
        ];
    }
}

const t = new Task("Complete homework", "Finish math exercises", "Charlie");
t.toggleStatus();

console.log(t.getDetails());

const tt = new Task("Clean room", "Clean the room", "Mary");
console.log(tt.getDetails());

const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));