import SearchBar from "../SearchBar/SearchBar";
import SelectBar from "../SelectBar/SelectBar";
import ToDoList from "../ToDoList/ToDoList";
import AddToDoForm from "../AddToDoForm/AddToDoForm";
import "./App.scss";

class App {
  constructor() {
    this.searchBar = new SearchBar();
    this.selectBar = new SelectBar();
    this.addToDoForm = new AddToDoForm();
  }

  init() {
    this.render();
    this.addToDoForm.handleAddToDoBtn();
    this.searchBar.handleInput();
    this.selectBar.handleSelect();
  }

  render() {
    const toDoList = new ToDoList(this.selectBar);
    toDoList.render();
  }
}

export default App;
