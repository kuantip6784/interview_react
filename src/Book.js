import React, { Component } from "react";
import { connect } from "react-redux";

import NavbarComponent from "./NavbarComponent";

class Book extends Component {
  render() {
    return (
      <>
        <div className="mb-3">
          <div className="list-group">
            <div className="list-group-item flex-column align-items-start">
              <div className="row">
                <div className="col-2 text-end p-0">
                  <p>ชื่อหนังสือ :</p>
                </div>
                <div className="col-10">
                  <p>{this.props.book.BookName}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-2 text-end p-0">
                  <p>วันที่เริ่มอ่าน :</p>
                </div>
                <div className="col-10">
                  <p>{this.props.book.Date_readStart}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-2 text-end p-0">
                  <p>วันที่อ่านจบ :</p>
                </div>
                <div className="col-10">
                  <p>{this.props.book.Date_readEnd}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-2 text-end p-0">
                  <p>ชื่อคนเขียน :</p>
                </div>
                <div className="col-10">
                  <p>{this.props.book.Author_name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <img
                    src={this.props.book.cover_Photo}
                    width="100"
                    height="100"
                  />
                </div>
              </div>

              <button
                type="button"
                class="btn btn-secondary pr-2"
                onClick={() =>
                  this.props.dispatch({
                    type: "EDIT_BOOK",
                    id: this.props.book.id,
                  })
                }
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                style={{ margin: 10 }}
                onClick={() =>
                  this.props.dispatch({
                    type: "DELETE_BOOK",
                    id: this.props.book.id,
                  })
                }
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Book);
