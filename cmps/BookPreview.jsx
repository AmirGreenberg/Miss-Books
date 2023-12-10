export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <h2>Title: {book.title}</h2>
            <h4>
                Price: {book.listPrice.currencyCode}
                {book.listPrice.amount}
            </h4>
            <img src={`${book.thumbnail}`} />
            {book.pageCount > 200 && book.pageCount < 500 && (
                <h4>Descent Reading</h4>
            )}
            {book.pageCount > 500 && <h4>Serius Reading</h4>}
            {book.pageCount < 100 && <h4>Light Reading</h4>}
        </article>
    )
}
