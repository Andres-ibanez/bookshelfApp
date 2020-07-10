import React from 'react'
import './App.css'
import Header from './components/Header'

class BooksApp extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <Header />
                    <div className="list-books-content">

                    </div>
                </div>
            </div>
        )
    }
}
export default BooksApp