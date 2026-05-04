export {};

// Input
type PersonInput = [

  id: number,
  firstName: string,
  lastName: string,
  age: number,
  middleName?: string,
  hobbies?: string[],
  workInfo?: [string, number]

];

// Output
type PersonOutput = [number, string, number, string, string];

const summarizePerson = (...[

  id,
  firstName,
  lastName,
  age,
  middleName,
  hobbies,
  workInfo,

]: PersonInput): PersonOutput => {
  
  const fullName = middleName
    ? `${firstName} ${middleName} ${lastName}`
    : `${firstName} ${lastName}`;

  const hobbie = hobbies && hobbies.length > 0
    ? hobbies.join(', ')
    : '-';

  const info = workInfo
    ? `${workInfo[0]} -> ${workInfo[1]}`
    : '-';

  return [id, fullName, age, hobbie, info];
};

const result = summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]);
console.log(result);