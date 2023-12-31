import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React

export function BookDetails({ bookId, onBack }) {
    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId).then((book) => setBook(book))
    }, [])

    if (!book) return <div>Loading...</div>
    return (
        <section className="book-details">
            <h1>Title: {book.title}</h1>
            <h1>Price: {book.listPrice.currencyCode}{book.listPrice.amount}</h1>
            <img src={`${book.thumbnail}`} />

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis quae fuga eveniet, quisquam ducimus modi optio in alias
                accusantium corrupti veritatis commodi tenetur voluptate
                deserunt nihil quibusdam. Expedita, architecto omnis?
            </p>
            <button onClick={onBack}>Back</button>
        </section>
    )
}
