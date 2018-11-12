import "bootstrap/dist/css/bootstrap.min.css";
import scss from "../styles/style.scss";
import $ from "jquery";



$(document).ready(() => {

  renderToDos();

});

const handleAddToDoBtn = (toDoList) => {
  $('#add-btn').click((e) => {
    const title = $('#input-title').val();
    const category = $('#input-category').val();
    const toDoId = Math.random().toString();

    console.log(title, category);

    if (title && category) {
      const newToDo = {
        title: title,
        category: category,
        isCompleted: false
      };
      Object.assign(toDoList, {[toDoId]: newToDo});
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
    };
  });
};

const renderToDos = () => {
  const toDoList = JSON.parse(localStorage.getItem("toDoList")) || {};

  $('.todo-items').empty();
  for (let key in toDoList) {
    const className = toDoList[key].isCompleted ? "todo-item todo-item_completed": "todo-item";
    $('.todo-items').append(
      `<div class="${className}" id=${key}>
      <div class="todo-item__info ">
        <div class="info-name">${toDoList[key].title}</div>
        <div class="info-category">${toDoList[key].category}</div>
      </div>
      <div class="todo-item__complete-btn">✓</div>
      <div class="todo-item__delete-btn">✗</div>
    </div>`
    );
  }
  handleAddToDoBtn(toDoList);
  handleCompleteBtns(toDoList);
  handleDeleteBtns(toDoList);
};


const handleCompleteBtns = (toDoList) => {
  $(".todo-item__complete-btn").click(function() {
    const id = $(this).parent().attr("id");
    const newToDoList = {...toDoList};
    newToDoList[id].isCompleted = !newToDoList[id].isCompleted;
    localStorage.setItem("toDoList", JSON.stringify(newToDoList));
    renderToDos();
  });
};

const handleDeleteBtns = (toDoList) => {
  $(".todo-item__delete-btn").click(function() {
    const id = $(this).parent().attr("id");
    const newToDoList = {...toDoList};
    delete newToDoList[id];
    localStorage.setItem("toDoList", JSON.stringify(newToDoList));
    renderToDos();
  });
};