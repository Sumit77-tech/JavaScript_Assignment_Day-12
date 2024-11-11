class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
}
module.exports = Book;

const Book = require('./book');
const books = [
    new Book("To kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1949),
    new Book("The Great Gatsby", "F. Scott Fitzerald", 1925),
    new Book("The Catcher in the Rye", "J.D. Salinger", 1951)
];
module.exports = books;

const books = require('./books');
const summaries = books.map(book => book.getSummary());
console.log(summaries);