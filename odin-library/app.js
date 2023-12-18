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
    element.innerHTML = `
    <h1>${library[i].title}</h1>
    <h1>${library[i].author}</h1>
    <h1>Page:${library[i].currentPage}</h1>
    <div class="add1">+1 page</div>
    <div class="minus1">-1 page</div>
    <div class="add10">+10 pages</div>
    <div class="minus10">-10 pages</div>
    <h1>id ${library[i].id}</h1>
    <div class="delete">Delete</div>`;
    libraryList.appendChild(element);
  }
  const deleteButtons = document.querySelectorAll(".delete");
  const add1 = document.querySelectorAll(".add1");
  const add10 = document.querySelectorAll(".add10");
  const minus1 = document.querySelectorAll(".minus1");
  const minus10 = document.querySelectorAll(".minus10");

  for (let i = 0; i < library.length; i++) {
    // let index = i;
    deleteButtons[i].addEventListener("click", () => {
      library.splice(i, 1);
      populateLibraryList();
    });
    add1[i].addEventListener("click", () => {
      library[i].currentPage++;
      populateLibraryList();
    });
    minus1[i].addEventListener("click", () => {
      if (library[i].currentPage >= 1) {
        library[i].currentPage--;
        populateLibraryList();
      }
    });
    add10[i].addEventListener("click", () => {
      library[i].currentPage += 10;

      populateLibraryList();
    });
    minus10[i].addEventListener("click", () => {
      if (library[i].currentPage >= 10) {
        library[i].currentPage -= 10;
        populateLibraryList();
      }
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
      Number(pageInput.value),
      newId
    );

    library.push(book);
    populateLibraryList();
  }
});

//Deleting Book
