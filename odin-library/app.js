//----------Initial Rendering----------
let library = [];

function Book(title, author, currentPage, id) {
  this.title = title;
  this.author = author;
  this.currentPage = currentPage;
  this.id = id;
}

// library.push(new Book("Harry Potter", "JK Rowling", 1, 0));

const populateLibraryList = () => {
  const libraryList = document.querySelector(".libraryList");

  //Reset inner html of library list
  libraryList.innerHTML = "";
  //Add books to library list
  for (let i = 0; i < library.length; i++) {
    const element = document.createElement("li");
    element.className = "book";
    element.innerHTML = `
    <h1>${library[i].title}</h1>
    <p>${library[i].author}</p>
    <p>Current Page: ${library[i].currentPage}</p>
    <form class=pageForm>
    <input class="setPageInput" type="number" placeholder="Enter Current Page"></input>
    <button class="setPage" type=submit">Set Page</button>
    </form>
    <div class="delete">Delete</div>`;
    libraryList.appendChild(element);

    const deleteButtons = document.querySelectorAll(".delete");
    const setPageInput = document.querySelectorAll(".setPageInput");
    const setPage = document.querySelectorAll(".setPage");

    //add event listeners to delete buttons
    deleteButtons[i].addEventListener("click", () => {
      let result = confirm(
        `Are you sure you want to delete "${library[i].title}"`
      );
      if (result) {
        library.splice(i, 1);
        populateLibraryList();
      }
    });
    //add event listeners to set page buttons
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

//----------Adding new book----------
const titleInput = document.querySelector(".titleInput");
const authorInput = document.querySelector(".authorInput");
const pageInput = document.querySelector(".pageInput");
const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
  //prevent default submit behavior
  e.preventDefault();
  //check if the add book form is complete
  if (titleInput.value && authorInput.value && pageInput.value) {
    //create unique id
    let newId = 0;
    if (library.length !== 0) {
      newId = library[library.length - 1].id + 1;
    }
    //create new book object
    const book = new Book(
      titleInput.value,
      authorInput.value,
      pageInput.value,
      newId
    );
    //add book to library
    library.push(book);
    //reset inputs
    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = 0;
    //repopulate library list
    populateLibraryList();
  }
  //if the add book form is not complete alert client
  else {
    alert("Please Complete Form");
  }
});
