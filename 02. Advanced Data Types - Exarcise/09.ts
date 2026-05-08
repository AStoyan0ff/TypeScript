type User = {

    id: number | string;
    username: string;
    passwordHash: string | string[];
    status: 'Locked' | 'Unlocked' | 'Deleted';

    email?: string;
};

function isValidUser(obj: any): obj is User {

    const validId =
        (typeof obj.id === 'number' && obj.id > 100) ||
        (typeof obj.id === 'string' && obj.id.length === 14);

    const validUsername =

        typeof obj.username === 'string' &&
        obj.username.length >= 5 &&
        obj.username.length <= 10;

    const validPasswordHash =
        (typeof obj.passwordHash === 'string' && obj.passwordHash.length === 20) ||
        (
            Array.isArray(obj.passwordHash) &&
            obj.passwordHash.length === 4 &&
            obj.passwordHash.every((x: string) => x.length === 8)
        );

    const validStatus =
        obj.status === 'Locked' ||
        obj.status === 'Unlocked';

    return validId && validUsername && validPasswordHash && validStatus;
}

console.log(isValidUser({

    id: 120,
    username: 'testing',
    passwordHash: '123456-123456-123456',
    status: 'Deleted',
    email: 'something'
})); // false

console.log(isValidUser({
    
    id: '1234-abcd-5678',
    username: 'testing',
    passwordHash: '123456-123456-123456',
    status: 'Unlocked'
})); // true