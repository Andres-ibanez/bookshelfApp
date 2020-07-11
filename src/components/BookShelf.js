import React, { Component } from 'react'
import ListBooks from './ListBooks'

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                {Object.keys(this.props.categorys).map(key => (
                    <div key={key}>
                        <h2 className="bookshelf-title">{this.props.categorys[key]}</h2>
                        <ListBooks category={key} books={this.props.books} update={this.props.update} />
                    </div>
                )
                )}

            </div>
        )
    }
}

export default BookShelf