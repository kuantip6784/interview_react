import react , { Component } from "react";
import PostBook from "./PostBook";
import AllPost from "./AllPost";

class App extends Component {
  render(){
    return (
      <div className="container-sm">
        <div className="navbar">
          <h2 className="center">Book it</h2>
        </div>
        <PostBook />
        <h2 className="center mt-5">Book list</h2>
        <AllPost />
      </div>
    );
  }
}

export default App;
