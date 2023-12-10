import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const CAR_KEY = 'bookDB'
var gFilterBy = { txt: '', minSpeed: 0 }
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getNextBookId,
    getFilterBy,
    setFilterBy
}

function query() {
    return storageService.query(CAR_KEY)
        .then(books => {
            if (gFilterBy.txt) {
                const regex = new RegExp(gFilterBy.txt, 'i')
                books = books.filter(book => regex.test(book.vendor))
            }
            if (gFilterBy.minSpeed) {
                books = books.filter(book => book.maxSpeed >= gFilterBy.minSpeed)
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(CAR_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(CAR_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(CAR_KEY, book)
    } else {
        return storageService.post(CAR_KEY, book)
    }
}

function getEmptyBook(vendor = '', maxSpeed = 0) {
    return { id: '', vendor, maxSpeed }
}

function getFilterBy() {
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
    return gFilterBy
}

function getNextBookId(bookId) {
    return storageService.query(CAR_KEY)
        .then(books => {
            let nextBookIdx = books.findIndex(book => book.id === bookId) + 1
            if (nextBookIdx === books.length) nextBookIdx = 0
            return books[nextBookIdx].id
        })
}

function _createBooks() {
    let books = utilService.loadFromStorage(CAR_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('audu', 300))
        books.push(_createBook('fiak', 120))
        books.push(_createBook('subali', 100))
        books.push(_createBook('mitsu', 150))
        utilService.saveToStorage(CAR_KEY, books)
    }
}

function _createBook(vendor, maxSpeed = 250) {
    const book = getEmptyBook(vendor, maxSpeed)
    book.id = utilService.makeId()
    return book
}