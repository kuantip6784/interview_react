const bookReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return state.concat([action.data]);
    case "DELETE_BOOK":
      return state.filter((book) => book.id !== action.id);
    case "EDIT_BOOK":
      return state.map((book) =>
        book.id === action.id ? { ...book, EditBook: !book.EditBook } : book
      );
    case "UPDATE":
      return state.map((book) => {
        if (book.id === action.id) {
          return {
            ...book,
            BookName: action.data.new_BookName,
            Date_readStart: action.data.new_Date_readStart,
            Date_readEnd: action.data.new_Date_readEnd,
            Author_name: action.data.new_Author_name,
            EditBook: !book.EditBook,
          };
        } else {
          return book;
        }
      });
    default:
      return state;
  }
};

export default bookReducer;
