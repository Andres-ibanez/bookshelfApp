import React, { Component } from 'react'
import Book from './Book'

class ListBooks extends Component {
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map(book => (
                        (book.shelf === this.props.category) && (
                            <li key={book.id}>
                                <Book properties={book} update={this.props.update} />
                            </li>
                        )
                    ))}
                </ol>
            </div>
        )
    }

}

export default ListBooks
