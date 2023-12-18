//Initial Rendering
let library = [];

function Book(title, author, currentPage, id) {
  this.title = title;
  this.author = author;
  this.currentPage = currentPage;
  this.id = id;
}

//Library List rendering
const libraryList = document.querySelector(".libraryList");

const populateLibraryList = () => {
  libraryList.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    const element = document.createElement("li");
    element.className = "book";
    element.innerHTML = `<h1>${library[i].title}</h1><h1>${library[i].author}</h1><h1>${library[i].currentPage}</h1><h1>id ${library[i].id}</h1><div class="delete">Delete</div>`;
    libraryList.appendChild(element);
  }
  const deleteButtons = document.querySelectorAll(".delete");

  for (let i = 0; i < deleteButtons.length; i++) {
    let index = i;
    deleteButtons[i].addEventListener("click", () => {
      library.splice(index, 1);
      populateLibraryList();
      console.log(library);
    });
  }
};

populateLibraryList();

//End of Initial Rendering

//Adding new book
const titleInput = document.querySelector(".titleInput");
const authorInput = document.querySelector(".authorInput");
const pageInput = document.querySelector(".pageInput");
const submit = document.querySelector(".submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (titleInput.value && authorInput.value && pageInput.value) {
    //id not needed
    let newId = 0;
    if (library.length !== 0) {
      newId = library[library.length - 1].id + 1;
    }
    //id not needed
    const book = new Book(
      titleInput.value,
      authorInput.value,
      pageInput.value,
      newId
    );

    library.push(book);
    populateLibraryList();
  }
});

//Deleting Book
