export function BookPreview({ book }) {
    const year = new Date().getFullYear()
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
           
            {(year - book.publishedDate) > 10 && <h5>Vintage</h5>}
            {(year - book.publishedDate) <= 1 && <h5>New</h5>}

            {(book.listPrice.isOnSale) && <h3>On Sale</h3>}

        </article>
    )
}
