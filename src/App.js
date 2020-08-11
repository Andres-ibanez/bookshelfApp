import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './components/Header'
import BookShelf from './components/BookShelf'
import AddBook from './components/AddBook'
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
    //Manejando el estado dentro de class components
    state = {
        categorys: {
            currentlyReading: 'Currently Reading',
            wantToRead: 'Want to Read',
            read: 'Read'
        },
        books: []
    }

    //Siempre se ejecta cuando se inicia el codigo.
    componentDidMount() {
        BooksAPI.getAll()
            .then(books => {
                this.setState(() => ({
                    books
                }))
            })
    }

    updateBooks = (bookUpdate, shelfUpdate) => {
        (bookUpdate.shelf === 'none') ?
            this.setState(currentState => ({
                books: [...currentState.books, { ...bookUpdate, shelf: shelfUpdate }]
            }))
            :
            this.setState(currentState => ({
                books: currentState.books.map(book => book.title === bookUpdate.title ? { ...book, shelf: shelfUpdate } : book)
            }))
        //console.log(this.state.books, 'update', bookUpdate)
        //Atualizando os dados usando metodo da API
        BooksAPI.update(bookUpdate, shelfUpdate)
    }

    render() {
        return (
            <div className="app">
            //Route perfime informar rota, componente, etc.
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <Header />
                        <div className="list-books-content">
                            <div>
                                {/* Pasando parametros a traves de los props */}
                                <BookShelf books={this.state.books} categorys={this.state.categorys} update={this.updateBooks} />
                            </div>
                        </div>
                        <div className="open-search">
                        {/* etiquetas <a> nesecitan ser substituidas por Link para 
                        trabajar adecuadamente con BrowserRoute, Route */}
                            <Link to='/addBook'>Add a book</Link>
                        </div>
                    </div>
                )}
                />
                <Route path='/addbook' render={() => (
                    <AddBook update={this.updateBooks} books={this.state.books} />
                )} />

            </div>
        )
    }
}
export default BooksApp
