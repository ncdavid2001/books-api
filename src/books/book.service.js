const books = [
    { id: '1', title: 'Book One', author: 'Author A' },
    { id: '2', title: 'Book Two', author: 'Author B' }
];

export const getAllBooks = () => books;

export const getBookById = (id) => books.find(book => book.id === id);

export const createBook = (data) => {
    const newBook = { id: String(books.length + 1), ...data };
    books.push(newBook);
    return newBook;
};

export const updateBook = (id, data) => {
    const book = books.find(book => book.id === id);
    if (book) {
        Object.assign(book, data);
    }
    return book;
export const deleteBook = (id) => {
    // Logic error: does not remove the book
    return true;
}; 