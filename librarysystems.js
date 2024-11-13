function Book(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
}
function Member(name, borrowedBooks = []) {
    this.name = name;
    this.borrowedBooks = borrowedBooks;
}
Member.prototype.borrowedBooks = function(book) {
    if(!book.isAvailable) {
        console.log(`${book.title} is already borrowed.`);
        return;
    }
    if(this.borrowedBooks.length >= 3) {
        console.log(`${this.name} cannot borrow more than 3 books.`);
        return;
    }
    book.isAvailable = false;
    this.borrowedBooks.push(book.title);
    console.log(`${this.name} borrowed "${book.title}".`);
};
function PremiumMember(name, borrowedBooks = []) {
    Member.call(this, name, borrowedBooks);
    this.specialCollectionAccess = true;
}
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.borrowBooks = function(book) {
    if(book.isAvailable || this.specialCollectionAccess) {
        if(this.borrowedBooks.length >= 5) {
            console.log(`${this.name} cannot borrow more than 5 books.`);
            return;
        }
        book.isAvailable = false;
        this.borrowBooks.push(book.title);
        console.log(`${this.name} borrowed "${book.title}",`);
    } else {
        console.log(`${book.title} is already borrowed.`);
    }
};
const book1 = new Book("The Great Gatsby", "F. Scott Fitzerald");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To kill a Mockingbird", "Harper Lee");
const book4 = new Book("Moby Dick", "Herman Melville");
const book5 = new Book("Pride and Prejudice", "Jane Austen");
const book6 = new Book("War and Peace", "Leo Tolstoy");
