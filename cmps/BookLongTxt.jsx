const { useState } = React

export function BookLongTxt({ txt, length }) {
    const [isShowMore, setIsShowMore] = useState(false)

    const toggleBookLongTxt = () => {
        setIsShowMore(!isShowMore)
    }

    return (
        <div className="card">
            <p>
                {txt.substring(0, length)}
                {isShowMore && (
                    <span>{txt.substring(length + 1, txt.length - 1)}</span>
                )}
                <span className="read-more" onClick={toggleBookLongTxt}>
                    {isShowMore ? '...less' : '...more'}
                </span>
            </p>
        </div>
    )
}
