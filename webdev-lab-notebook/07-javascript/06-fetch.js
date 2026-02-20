const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const add_book_to_DOM = (book) => {
  let element = document.createElement('div')
  let title = document.createElement('h3')
  let author = document.createElement('p')
  let released = document.createElement('p')
  let pages = document.createElement('p')

  title.textContent = book.name
  author.textContent = book.authors[0]
  released.textContent = book.released.substr(0, 4)
  pages.textContent = `${book.numberOfPages} pages`

  element.append(title)
  element.append(author)
  element.append(released)
  element.append(pages)

  // Our text is centered and styled already since the HTML elements take care of this step for us
  // Video tutorial shows how we can use flexbox to style them manually in here

  // This part is optional and meant to show that this is possible to do!

  // element.style.display = 'flex'
  // element.style.flexDirection = 'column'
  // element.style.alignItems = 'center'
  // element.style.marginTop = '20px'

  app.append(element)
}

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url).then(response => response.json())
  .then(data => {
    //console.log(data)

    data.forEach(book =>{
      //console.log(book.name, book.authors[0], book.numberOfPages, book.released) //This prints all of the data in DevTools Console

      add_book_to_DOM(book)
    })
  })
  .catch(error => {
    //console.error(error)

    let element = document.createElement('div')
    element.textContent = "An error occured. Please reload the page."
    app.append(element)
  })

  .finally(() => {
    let loader = document.querySelector('#loading')
    app.removeChild(loader)
  })
};

fetchData(url)