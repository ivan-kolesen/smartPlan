import ToDoItem from "../ToDoItem/ToDoItem";
import $ from "jquery";
import "./ToDoList.scss";

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
      this.setData();
      this.render();
    });
  };

  handleDeleteBtns(){
    $(".todo-item__delete-btn").click((e) => {
      const id = $(e.target).parent().attr("id");
      delete this.data[id];
      this.setData();
      this.render();
    });
  };

  getData(){
    this.data = JSON.parse(localStorage.getItem("toDoList")) || {};
  }

  setData(){
    localStorage.setItem("toDoList", JSON.stringify(this.data));
  }

  render(){
    this.getData();
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