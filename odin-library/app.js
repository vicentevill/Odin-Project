//Initial Rendering
let library = [];

function Book(title, author, currentPage, id) {
  this.title = title;
  this.author = author;
  this.currentPage = currentPage;
  this.id = id;
}

//Library List rendering

const populateLibraryList = () => {
  const libraryList = document.querySelector(".libraryList");
  libraryList.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    const element = document.createElement("li");
    element.className = "book";
    element.innerHTML = `
    <h1>${library[i].title}</h1>
    <h1>${library[i].author}</h1>
    <h1>Current Page:${library[i].currentPage}</h1>
    <form>
    <input class="setPageInput" type="number" placeholder="Enter Current Page"></input>
    <button class="setPage" type=submit">Set Current Page</button>
    </form>
    <h1>id ${library[i].id}</h1>
    <div class="delete">Delete</div>`;
    libraryList.appendChild(element);

    const deleteButtons = document.querySelectorAll(".delete");
    const setPageInput = document.querySelectorAll(".setPageInput");
    const setPage = document.querySelectorAll(".setPage");

    deleteButtons[i].addEventListener("click", () => {
      let result = confirm(
        `Are you sure you want to delete "${library[i].title}"`
      );
      if (result) {
        library.splice(i, 1);
        populateLibraryList();
      }
    });
    setPage[i].addEventListener("click", (e) => {
      e.preventDefault();
      if (setPageInput[i].value) {
        library[i].currentPage = setPageInput[i].value;
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

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (titleInput.value && authorInput.value && pageInput.value) {
    //create id and
    let newId = 0;
    if (library.length !== 0) {
      newId = library[library.length - 1].id + 1;
    }

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
