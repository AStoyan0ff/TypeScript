function summarizePerson(
    id: number,
    firstName: string,
    lastName: string,
    age: number,

    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]

): [number, string, number, string, string] {

    const fullName = middleName 
        ? `${firstName} ${middleName} ${lastName}`
        : `${firstName} ${lastName}`;

    const hobbie = hobbies && hobbies.length > 0 
        ? hobbies.join(', ')
        : '-';    

    const info = workInfo 
        ? `${workInfo[0]} -> ${workInfo[1]}`
        :  '-';    

    return [id, fullName, age, hobbie, info];
}

console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));


