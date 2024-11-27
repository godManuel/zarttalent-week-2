// PART 1: CONSTRUCTOR FUNCTION
// Constructor function for Book
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  // Add methods to the Book prototype
  Book.prototype.getSummary = () => {
    return `${this.title} by ${this.author}, published in ${this.year}.`;
  };
  
  Book.prototype.getAge = () => {
    const currentYear = new Date().getFullYear();
    return `${this.title} is ${currentYear - this.year} years old.`;
  };
  
  // Example usage
  const book1 = new Book("A Day in Node", "Ryan Dahl", 2017);
  console.log(book1.getSummary());
  console.log(book1.getAge());
  
// PART 2: CREATE A LIBRARY CLASS
// PART 4: INSTANCES & FUNCTIONALITY DEMONSTRATION
class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    // Add a book to the library
    addBook(book) {
        if(!book.name || !book.author) {
            throw new Error("Empty fields! Include a book name and book author")
        }
      this.books.push(book);
    }
  
    // Find all books
    getBooks() {
        if (this.books.length === 0) {
            return "No books available in the library."; 
        }
        return this.books.map(book => `${book.title} by ${book.author}`);
    }
  
    // Find a book by title
    getBook(title) {
      return this.books.find(book => book.title === title) || "Book not found.";
    }

    // Find books by author
    getBooksByAuthor(author) {
        const booksByAuthor = this.books.filter((book) => book.author === author);
        return booksByAuthor.length
          ? booksByAuthor.map((book) => book.title).join(", ")
          : `No books found by ${author}.`;
      }
    
    //   Delete a book by title
    removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index === -1) {
        throw new Error(`Book titled "${title}" not found.`);
    }
    const removedBook = this.books.splice(index, 1);
    return `"${removedBook[0].title}" has been removed from the library.`;
    }
  }
  
  // Example usage
  const myLibrary = new Library("Javascript");
  
  const book1 = { title: "A Day in Node", author: "Ryan Dahl", year: 2022 };
  const book2 = { title: "Let's Flutter or Script Java", author: "Unknown", year: 2000 };
  
  myLibrary.addBook(book1);
  myLibrary.addBook(book2);
  
  console.log(myLibrary.getBooks());
  console.log(myLibrary.getBook("Let's Flutter or Script Java"));

//  PART 3: CREATE A SUBCLASS & INHERIT FROM BOOK
class SpecialEditionBook extends Book {
    constructor(title, author, year, edition) {
      super(title, author, year); // Call the parent class constructor
      this.edition = edition;
    }
  
    getSpecialEditionSummary() {
      return `${this.title} (${this.edition} Edition) by ${this.author}, published in ${this.year}.`;
    }
  }
  
  // Example usage
  const specialBook = new SpecialEditionBook(
    "1984",
    "George Orwell",
    1949,
    "Collector's"
  );
  
  console.log(specialBook.getSummary());
  console.log(specialBook.getSpecialEditionSummary());

// ElectronicBook subclass
class ElectronicBook extends Book {
    constructor(title, author, year, fileSize, format) {
      super(title, author, year); // Call the parent class constructor
      this.fileSize = fileSize; // File size in MB
      this.format = format; // Format (e.g., PDF, EPUB, etc.)
    }
  
    getDetails() {
      return `${this.getSummary()} File size: ${this.fileSize}MB, Format: ${this.format}.`;
    }
  }
  