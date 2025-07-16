const fs = require('fs');
const path = require('path');

function checkController() {
  const controllerPath = path.join(__dirname, 'src', 'books', 'book.controller.js');
  const content = fs.readFileSync(controllerPath, 'utf-8');
  let errors = [];

  if (content.includes('sendResponse(res, 201')) {
    errors.push('getAllBooks uses wrong status code 201.');
  }
  if (content.includes('sendResponse(res, 400')) {
    errors.push('createBook uses wrong status code 400.');
  }
  if (content.includes('sendResponse(res, 204')) {
    errors.push('deleteBook uses wrong status code 204.');
  }
  if (!content.includes('async') && content.includes('createBook')) {
    errors.push('createBook is missing async/await.');
  }
  if (!content.includes('try') && content.includes('updateBook')) {
    errors.push('updateBook is missing error handling.');
  }
  return errors;
}

function checkService() {
  const servicePath = path.join(__dirname, 'src', 'books', 'book.service.js');
  const content = fs.readFileSync(servicePath, 'utf-8');
  let errors = [];
  if (content.includes('// Logic error: does not update the book')) {
    errors.push('updateBook does not actually update the book.');
  }
  if (content.includes('// Logic error: does not remove the book')) {
    errors.push('deleteBook does not actually remove the book.');
  }
  return errors;
}

function main() {
  let errors = [];
  errors = errors.concat(checkController());
  errors = errors.concat(checkService());
  if (errors.length === 0) {
    console.log('No mistakes found.');
  } else {
    console.log('Mistakes detected:');
    errors.forEach(e => console.log('- ' + e));
  }
}

main(); 