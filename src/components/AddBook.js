import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class AddBook extends Component {
    state = {
        query: '',
        bookSearch: []
    }

    updateQuery = query => {
        this.setState({
            query: query,
        },
            () => {
                this.searchBook(this.state.query, this.props.books);
            })
    }

    searchBook = async (searchInput, booksMain) => {
        let searchedBooks = [];
        if (searchInput !== "") {
            searchedBooks = await BooksAPI.search(searchInput);
            searchedBooks = searchedBooks.keys ? searchedBooks : []
        }
 
        this.setState((currentState, searchInput) => ({
            bookSearch: searchedBooks.map(book => (
                {
                    ...book,
                    shelf: booksMain.reduce((prev, bookMain) =>
                        (prev !== 'none' && prev !== '') ? prev : (book.title === bookMain.title) ? bookMain.shelf : 'none', ''),
                    imageLinks: book.imageLinks ? book.imageLinks : { thumbnail: '' },
                    authors: book.authors ? book.authors : ''
                }
            ))
        })
        )

    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" value={this.state.query} onChange={event => this.updateQuery(event.target.value)} placeholder="Search by title or author" />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.bookSearch.map(book =>
                            <li key={book.id}>
                                <Book properties={book} update={this.props.update} />
                            </li>)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default AddBook