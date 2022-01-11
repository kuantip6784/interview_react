import React, { Component } from 'react'
import { connect } from 'react-redux'
import Book from './Book'
import EditBook from './EditBook'

class AllPost extends Component {
    render() {
        return (
            <div className='mb-3'>
                {this.props.posts.map((book) => (
                    <div key={book.id}>
                        {book.EditBook ? <EditBook book={book} key={book.id}/> : <Book key={book.id} book={book}/>}
                    </div>
                ))}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        posts : state
    }
}

export default connect(mapState)(AllPost)
