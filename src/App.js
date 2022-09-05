import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-filter/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filterString: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          monsters: users,
        });
      });
  }

  OnSearchChange = (event) => {
    this.setState({
      filterString: event.target.value.toLocaleLowerCase(),
    });
  }

  render() {

    const {monsters, filterString} = this.state;
    const {OnSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(filterString);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox onChangeHandler={OnSearchChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
