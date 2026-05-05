function getDayOfWeek(n: number): void {

    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };

    console.log(Days[n] || 'error');
}

getDayOfWeek(2);