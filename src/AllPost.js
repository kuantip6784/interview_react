import React, { Component } from "react";
import { connect } from "react-redux";
import Book from "./Book";
import EditBook from "./EditBook";
import NavbarComponent from "./NavbarComponent";

class AllPost extends Component {
  render() {
    return (
      <div className="container-sm mt-5">
        <NavbarComponent />
        <div className="mb-3">
          {this.props.book.map((book) => (
            <div key={book.id}>
              {book.EditBook ? (
                <EditBook book={book} key={book.id} />
              ) : (
                <Book key={book.id} book={book} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    book: state,
  };
};

export default connect(mapState)(AllPost);
