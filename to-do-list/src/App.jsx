import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
      input: "",
    };
  }

  setTitle = (event) => {
    this.setState({ input: event.target.value });
  };

  add = () => {
    this.state.toDos.push(this.state.input);
    this.setState({ input: "" });
  };

  remove = (val) => {
    const filteredTodos = this.state.toDos.filter((t) => t !== val);
    this.setState({ toDos: filteredTodos });
  };

  render() {
    return (
      <div className="App container">
        <h1>Welcome to To-Do list!</h1>
        <div className="row">
          <Input input={this.state.input} handleInput={this.setTitle} />
          <Button handleClick={this.add}>Add</Button>
        </div>
        <div className="row">
          <ul>
            {this.state.toDos.map((toDo, i) => (
              <ListItem key={i} handleClick={this.remove}>
                {toDo}
              </ListItem>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
