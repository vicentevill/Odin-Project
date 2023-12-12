let library = [];

function Book(title, author, currentPage) {
  this.title = title;
  this.author = author;
  this.currentPage = currentPage;
}

let newBook = new Book("Harry Potter", "JK Rowling", "100");

library.push(newBook);

console.log(library);

//Library List rendering
const libraryList = document.querySelector(".libraryList");

const populateLibraryList = () => {
  for (let i = 0; i < library.length; i++) {
    const element = document.createElement("li");
    element.className = "book";
    element.innerHTML = `<h1>${library[i].title}</h1><h1>${library[i].author}</h1><h1>${library[i].currentPage}</h1>`;
    libraryList.appendChild(element);
  }
};

populateLibraryList();

//Adding new book
const titleInput = document.querySelector(".titleInput");
const authorInput = document.querySelector(".authorInput");
const pageInput = document.querySelector(".pageInput");
const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  library = [];
  let book = new Book(titleInput.value, authorInput.value, pageInput.value);

  library.push(book);
  console.log(library);
  populateLibraryList();
});
