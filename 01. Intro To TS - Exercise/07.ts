function friday13th(arr: unknown[]): void {

    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    for (const el of arr) {

        if (el instanceof Date && el.getDay() === 5 && el.getDate() === 13) 
        console.log(`${el.getDate()}-${months[el.getMonth()]}-${el.getFullYear()}`);
    }
}

// 13-June-2025
friday13th([

{},
new Date(2025, 4, 13),
null,
new Date(2025, 5, 13),
'13-09-2023',
new Date(2025, 6, 13),

]);
