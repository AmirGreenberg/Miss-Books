export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <h2>Title: {book.title}</h2>
            <h4>Price {book.price}</h4>
            <img src={`../assets/img/${book.title}.png`} alt="" />
        </article>
    )
}
