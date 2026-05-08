export{};

type TaskStatus = 'Logged' | 'Started' | 'InProgress' | 'Done';

interface TaskUser {

    username: string;
    signupDate: Date;
}

interface Task {

    status: TaskStatus;
    title: string;
    daysRequired: number;
    assignedTo: TaskUser | undefined;

    changeStatus(newStatus: TaskStatus): void;
}

function assignTask(user: TaskUser, task: Task): void {

    if (task.assignedTo === undefined) {
        task.assignedTo = user;

        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}

let user = {

    username: 'Margaret',
    signupDate: new Date(2022, 1, 13),
    passwordHash: 'random'
};

let task1: Task = {

    status: 'Logged',
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,

    changeStatus(newStatus: TaskStatus) {
        this.status = newStatus;
    }
};

let task2 = {
    
    status: 'Done' as TaskStatus,
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined,

    changeStatus(newStatus: TaskStatus) {
        this.status = newStatus;
    },

    moreProps: 300,
    evenMore: 'wow'
};

assignTask(user, task1);
assignTask(user, task2);