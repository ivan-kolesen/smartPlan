import ToDoItem from "../ToDoItem/ToDoItem";
import $ from "jquery";
import "./ToDoList.scss";
import { getData, setData } from "../api/dataTransfer";

class ToDoList{
  constructor(selectBar){
    this.selectBar = selectBar;
    this.data;
  }

  clearCurrentToDoList(){
    $('.todo-items').empty();
  }

  handleCompleteBtns(){
    $(".todo-item__complete-btn").click((e) => {
      const id = $(e.target).parent().attr("id");
      this.data[id].isCompleted = !this.data[id].isCompleted;
      setData(this.data);
      this.render();
    });
  };

  handleDeleteBtns(){
    $(".todo-item__delete-btn").click((e) => {
      const id = $(e.target).parent().attr("id");
      delete this.data[id];
      setData(this.data);
      this.render();
    });
  };

  render(){
    this.data = getData();
    this.clearCurrentToDoList();
    for (let key in this.data) {
      const toDoItem = new ToDoItem(key, this.data[key]);
      toDoItem.render();
    };
    this.handleCompleteBtns();
    this.handleDeleteBtns();
    this.selectBar.addOptions();
  }
}

export default ToDoList;