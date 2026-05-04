export {};

type DateItem = {
  date?: Date;
};


function friday13th(items: DateItem[]): string[] {

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  return items

    .map(item => item.date)
    .filter((d): d is Date => d instanceof Date)
    .filter(date => date.getDay() === 5 && date.getDate() === 13)
    .map(date => `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`);
}

const res = friday13th([

  { date: new Date(2025, 4, 13) },
  { date: new Date(2025, 5, 13) },
  { date: new Date(2025, 6, 13) },
  { date: undefined },
  {}
]);

console.log(res);

const resTwo = friday13th([
  { date: new Date(2023, 0, 13) }, 
  { date: new Date(2023, 9, 13) }, 
  { date: new Date(2024, 8, 13) }, 
]);

console.log(resTwo);