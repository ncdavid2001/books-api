import * as bookService from "../books/book.service.js";
import { sendResponse } from "../common/utils.common.js";

export const getAllBooks = (req, res) => {
  const books = bookService.getAllBooks();
  sendResponse(res, 201, true, "Books fetched successfully", books); // Wrong status code
};

export const getBookById = (req, res) => {
  const { id } = req.params;
  const book = bookService.getBookById(id);
  sendResponse(res, 200, true, "Book fetched successfully", book);
};

export const createBook = (req, res) => {
  // Missing async/await for service
  const book = bookService.createBook(req.body);
  sendResponse(res, 400, true, "Book created successfully", book); // Wrong status code
};

export const updateBook = (req, res) => {
  const { id } = req.params;
  // No error handling if book not found
  const book = bookService.updateBook(id, req.body);
  sendResponse(res, 200, true, "Book updated successfully", book);
};

export const deleteBook = (req, res) => {
  const { id } = req.params;
  bookService.deleteBook(id); // No error handling
  sendResponse(res, 204, true, "Book deleted successfully", null); // Wrong status code
};
