enum WeekDay {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function reversedDayOfWeek(day: string) : void {
    console.log(WeekDay[day as keyof typeof WeekDay] ?? 'error');
}

reversedDayOfWeek('Monday');
reversedDayOfWeek('Friday'); 
reversedDayOfWeek('Invalid'); 