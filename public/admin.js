async function main() {
    ​
        let response = await fetch('http://localhost:3001/listBooks')
        let books = await response.json()
    ​
        books.forEach(renderBook)
    }
    ​
    function renderBook(book) {
        let bookContainer = document.querySelector('#root')
        bookContainer.innerHTML += `
            <div class="col-sm-3">
                <div class="card" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                    </div>
                    <input id="book${book.id}" type="text" value="${book.quantity}"/>
                    <button onclick="changeBookQuantity(${book.id}, getBookInput(${book.id}).value)">Submit</button>
                </div>
            </div>
        `
    }
    ​
    function getBookInput(id) {
        let bookInput = document.getElementById(`book${id}`)
        return document.getElementById(`book${id}`)
    }
    ​
    async function changeBookQuantity(id, quantity) {
        let response = await fetch("http://localhost:3001/updateBook", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "quantity": quantity
            }),
        })
    ​
        let bookInput = document.getElementById(`book${id}`)
        bookInput.value = quantity
    ​
    }
    ​
    main()