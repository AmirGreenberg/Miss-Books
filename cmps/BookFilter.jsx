const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function onSetFilterBy(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break

            case 'checkbox':
                value = target.checked
                break

            default:
                break
        }

        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    const { txt, maxPrice, subtxt, description, authors, categories,   } = filterByToEdit
    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>
            <form onSubmit={onSetFilterBy}>
                <label htmlFor="txt">Title: </label>
                <input
                    value={txt}
                    onChange={handleChange}
                    type="text"
                    id="txt"
                    name="txt"
                />
                
                <label htmlFor="subtxt">Subtitle: </label>
                <input
                    value={subtxt}
                    onChange={handleChange}
                    type="text"
                    id="subtxt"
                    name="subtxt"
                />
              
                <label htmlFor="description">Description: </label>
                <input
                    value={description}
                    onChange={handleChange}
                    type="text"
                    id="description"
                    name="description"
                />
             
                <label htmlFor="authors">Authors: </label>
                <input
                    value={authors}
                    onChange={handleChange}
                    type="text"
                    id="authors"
                    name="authors"
                />
               
                <label htmlFor="categories">Categories: </label>
                <input
                    value={categories}
                    onChange={handleChange}
                    type="text"
                    id="categories"
                    name="categories"
                />

                <label htmlFor="maxPrice">Max Price: </label>
                <input
                    value={maxPrice || ''}
                    onChange={handleChange}
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                />

                
            </form>
        </section>
    )
}
