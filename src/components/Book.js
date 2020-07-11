import React from 'react'

const Book = props => {
    const image = props.properties.imageLinks.thumbnail ? props.properties.imageLinks.thumbnail : ''
    const authors = props.properties.authors ? props.properties.authors : 'unknown'

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                <div className="book-shelf-changer">
                    <select
                        value={props.properties.shelf}
                        onChange={event => (props.update(props.properties, event.target.value))}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading" checked>Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.properties.title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

export default Book