export {};

// Input tuple
type PersonInput = [

  id: number,
  firstName: string,
  lastName: string,
  age: number,
  middleName?: string,
  hobbies?: string[],
  workInfo?: [string, number]
];

// Out Object
type PersonOutput = {

  id: number;
  fullName: string;
  age: number;
  hobbies: string;
  workInfo: string;
};

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

  const hobbie = hobbies?.length
    ? hobbies.join(', ')
    : '-';

  const info = workInfo
    ? `${workInfo[0]} -> ${workInfo[1]}`
    : '-';

  return {
    id,
    fullName,
    age,
    hobbies: hobbie,
    workInfo: info
  };
};

const result = summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]);
console.log(result);