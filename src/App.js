import react , { Component } from "react";
import PostBook from "./PostBook";
import AllPost from "./AllPost";

import NavbarComponent from "./NavbarComponent";

class App extends Component {
  render(){
    return (
      <div className="container-sm mt-5">
        <NavbarComponent />
        <PostBook />
      
      </div>
    );
  }
}

export default App;
