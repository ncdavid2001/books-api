import * as bookService from "../books/book.service.js";
import { sendResponse } from "../common/utils.common.js";

export const getAllBooks = (req, res) => {
  const books = bookService.getAllBooks();
  sendResponse(res, 201, true, "Books fetched successfully", books); // the issuse is the status code. used t should be 200};
};

export const getBookById = (req, res) => {
  const { id } = req.params;
  const book = bookService.getBookById(id);
  sendResponse(res, 200, true, "Book fetched successfully", book);
};

export const createBook = (req, res) => {
const { id } = req.params;
  const book = bookService.createBook(req.body);
  sendResponse(res, 400, true, "Book created successfully", book); // the issues here is wrong status code used. 200 is ok
};

export const updateBook = (req, res) => {
  const { id } = req.params;
  try {
    const book = bookService.updateBook(id, req.body);
    sendResponse(res, 200, true, "Book updated successfully", book);
  } catch (error) {
  const book = bookService.updateBook(id, req.body);
  sendResponse(res, 200, true, "Book updated successfully", book); // there is no error handler
};

export const deleteBook = (req, res) => {
  const { id } = req.params;
  try {
    bookService.deleteBook(id);
    sendResponse(res, 200, true, "Book deleted successfully", null);
  } catch (error) {
  sendResponse(res, 204, true, "Book deleted successfully", null); // the status code is incorrect, it should be 200};
