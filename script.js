const addNewBook = document.getElementById('btn-save');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const bookList = document.getElementById('bookList')



addNewBook.addEventListener('click', function () {
    var newDiv = document.createElement('div');
    var newTitleElement = document.createElement('p');
    var newTitle = title.value;
    newTitleElement.textContent = newTitle;
    newTitleElement.style.width = '25%';
    title.value = '';

    var newAuthorElement = document.createElement('p');
    var newAuthor = author.value;
    newAuthorElement.textContent = newAuthor;
    newTitleElement.style.width = '25%';
    author.value = '';


    var newPagesElement = document.createElement('p');
    var newPages = pages.value;
    newPagesElement.textContent = newPages;
    newPagesElement.style.width = '25%';
    pages.value = '';

    
    var newCheckElement = document.createElement("input");
    newCheckElement.setAttribute("type", "checkbox");
    newCheckElement.style.width = '25%';


    bookList.appendChild(newDiv);
    newDiv.style.display = "flex";
    newDiv.style.width = '100%';
    newDiv.style.borderBottom = "solid 1px #20948b";

    const delateBtn = document.createElement('div');
    delateBtn.innerHTML = "&times;";
    delateBtn.style.fontSize = "40px";
    delateBtn.addEventListener('mouseover', function () {
        delateBtn.style.cursor = "pointer";
    })
    delateBtn.addEventListener('click', function () {
        delateBtn.parentElement.remove();
    })


    newDiv.appendChild(newTitleElement);
    newDiv.appendChild(newAuthorElement);
    newDiv.appendChild(newPagesElement);
    newDiv.appendChild(newCheckElement);
    newDiv.appendChild(delateBtn);

});



const delateBtn = document.createElement('div');
delateBtn.innerHTML = "&times;";
delateBtn.style.fontSize = "40px";
delateBtn.addEventListener('mouseover', function () {
    delateBtn.style.cursor = "pointer";
})
delateBtn.addEventListener('click', function () {
    delateBtn.parentElement.remove();
})

var delateBtnInMyBook = bookList.firstElementChild;
delateBtnInMyBook.appendChild(delateBtn);
