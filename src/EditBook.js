import React, { Component } from "react";
import { connect } from "react-redux";

class EditBook extends Component {
  SubmitEditBook = (e) => {
    e.preventDefault();
    const new_BookName = this.getBookName.value;
    const new_Date_readStart = this.getDate_readStart.value;
    const new_Date_readEnd = this.getDate_readEnd.value;
    const new_Author_name = this.getAuthor_name.value;
    const data = {
      new_BookName,
      new_Date_readStart,
      new_Date_readEnd,
      new_Author_name,
    };

    this.props.dispatch({
      type: "UPDATE",
      id: this.props.book.id,
      data,
    });
  };

  render() {
    return (
      <div className="card p-3 mb-3">
        <p>แก้ไขข้อมูลหนังสือ {this.props.book.BookName}</p>
        <form className="row" onSubmit={this.SubmitEditBook}>
          <div class="mb-2  col-sm-12 col-lg-6">
            <label class="form-label">ชื่อหนังสือ</label>
            <input
              ref={(value_input) => (this.getBookName = value_input)}
              defaultValue={this.props.book.BookName}
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-2 col-sm-6 col-lg-6">
            <label class="form-label">วันที่เริ่มอ่าน</label>
            <input
              ref={(value_input) => (this.getDate_readStart = value_input)}
              defaultValue={this.props.book.Date_readStart}
              type="date"
              class="form-control"
            />
          </div>
          <div class="mb-2  col-sm-6 col-lg-6">
            <label class="form-label">วันที่อ่านจบ</label>
            <input
              ref={(value_input) => (this.getDate_readEnd = value_input)}
              defaultValue={this.props.book.Date_readEnd}
              type="date"
              class="form-control"
            />
          </div>
          <div class="mb-2 col-lg-6">
            <label class="form-label">ชื่อคนเขียน</label>
            <input
              ref={(value_input) => (this.getAuthor_name = value_input)}
              defaultValue={this.props.book.Author_name}
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-2 col-lg-6">
            <label class="form-label">รูปปก</label>
            <input type="file" class="form-control" />
          </div>

          <div class="Post_div mt-3">
            <button type="submit" class="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(EditBook);
