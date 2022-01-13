import React, { Component } from "react";
import { connect } from "react-redux";

import NavbarComponent from "./NavbarComponent";

class PostBook extends Component {
  // fileSelet = e => {
  //     formData = new FormData();
  //     formData.append('file', e.target.files[0])
  // }

  SubmitBook = (e) => {
    e.preventDefault();
    const BookName = this.getBookName.value;
    const Date_readStart = this.getDate_readStart.value;
    const Date_readEnd = this.getDate_readEnd.value;
    const Author_name = this.getAuthor_name.value;

    const data = {
      id: new Date(),
      BookName,
      Date_readStart,
      Date_readEnd,
      Author_name,
      // formData,

      //การแก้ไข
      EditBook: false,
    };

    this.props.dispatch({
      type: "ADD_BOOK",
      data,
    });
    this.getBookName.value = "";
    this.getDate_readStart.value = "";
    this.getDate_readEnd.value = "";
    this.getAuthor_name.value = "";
  };

  render() {
    return (
      <>
        <div class="card">
          <div class="card-header bg-primary text-white">Create Book</div>
          <div class="card-body">
            <form className="row" onSubmit={this.SubmitBook}>
              <div class="mb-2  col-sm-12 col-lg-6">
                <label class="form-label">ชื่อหนังสือ</label>
                <input
                  ref={(value_input) => (this.getBookName = value_input)}
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-2 col-sm-6 col-lg-6">
                <label class="form-label">วันที่เริ่มอ่าน</label>
                <input
                  ref={(value_input) => (this.getDate_readStart = value_input)}
                  type="date"
                  class="form-control"
                />
              </div>
              <div class="mb-2  col-sm-6 col-lg-6">
                <label class="form-label">วันที่อ่านจบ</label>
                <input
                  ref={(value_input) => (this.getDate_readEnd = value_input)}
                  type="date"
                  class="form-control"
                />
              </div>
              <div class="mb-2 col-lg-6">
                <label class="form-label">ชื่อคนเขียน</label>
                <input
                  ref={(value_input) => (this.getAuthor_name = value_input)}
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-2 col-lg-6">
                <label class="form-label">รูปปก</label>
                <input
                  // ref={(value_input) => this.fileImg = value_input}
                  onChange={this.fileSelet}
                  type="file"
                  accept="image/*"
                  class="form-control"
                />
              </div>

              <div class="Post_div mt-3">
                <button type="submit" class="btn btn-primary">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(PostBook);
