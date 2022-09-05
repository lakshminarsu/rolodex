import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search-box monsters-search-box"
        type="search"
        placeholder="Search Monsters"
        onChange={this.props.onChangeHandler}
      ></input>
    );
  }
}

export default SearchBox;
