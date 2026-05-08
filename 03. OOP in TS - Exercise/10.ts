class Users {

    private name: string;

    constructor(username: string) {

        if (username.length < 3) {
            throw new Error("Username must be at least 3 characters long");
        }

        this.name = username;
    }

    get username(): string {
        return this.name;
    }

    set username(newUsername: string) {

        if (newUsername.length < 3) {
            throw new Error("Username must be at least 3 characters long");
        }

        this.name = newUsername;
    }
}

const u = new Users('AStoyanoff');
u.username = 'JohnDoe';

console.log(u.username);
