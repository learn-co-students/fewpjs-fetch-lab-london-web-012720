function fetchBooks() {
    fetch("https://anapioficeandfire.com/api/books")
        .then(response => response.json())
        .then(json => {
            renderBooks(json);
            book5th(json);
            totalNumberOfPages(json);
        })

}

function sum(array) {

    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i]["numberOfPages"]
    }

    // array.forEach( element => {
    //   total += element["numberOfPages"]
    // })

    // function iteratorCallBack(element) {
    //   doesStuff
    // }
    // array.forEach( iteratorCallBack )

    return total
}

function totalNumberOfPages(json) {


    const body = document.body

    const total = sum(json)

    const h4 = document.createElement("h4")
    h4.innerText = total

    body.appendChild(h4)
}


function book5th(json) {
    const body = document.body

    const book = `${json[4]["name"]} is the 5th book in the series`

    const h3 = document.createElement('h3')
    h3.innerHTML = book

    body.appendChild(h3)
}

function renderBooks(json) {
    const main = document.querySelector('main')
    json.forEach(book => {
        const h2 = document.createElement('h2')
        h2.innerHTML = `<h2>${book.name}</h2>`
        main.appendChild(h2)
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();

})