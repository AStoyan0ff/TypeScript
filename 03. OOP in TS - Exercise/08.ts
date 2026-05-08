class Book {
    
    readonly title: string;
    readonly author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

const book = new Book('1985', 'Steven King');
console.log(`${book.title} by ${book.author}`);
