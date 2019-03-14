import React from 'react'
import Book from './Book'

const BookList = props => (
  <div className="row book-list">
    {props.books.map(book => (
      <Book id={book.id} cover={book.cover} />
    ))}
  </div>
)

export default BookList
