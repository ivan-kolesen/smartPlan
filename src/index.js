import "bootstrap/dist/css/bootstrap.min.css";
import scss from "../styles/style.scss";
import $ from "jquery";

const toDoList = JSON.parse(localStorage.getItem("toDoList")) || {};

$(document).ready(() => {

  renderToDos();


  $('#add-btn').click((e) => {
    const title = $('#input-title').val();
    const category = $('#input-category').val();
    const toDoId = Math.random().toString();

    console.log(title, category);

    if (title && category) {
      const newToDo = {
        title: title,
        category: category,
        issCompleted: false
      };
      Object.assign(toDoList, {[toDoId]: newToDo});
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
    };
  });

});

const renderToDos = () => {
  for (let key in toDoList) {
    $('.todo-items').append(
      `<div class="todo-item">
      <div class="todo-item__info ">
        <div class="info-name">${toDoList[key].title}</div>
        <div class="info-category">${toDoList[key].category}</div>
      </div>
      <div class="todo-item__complete-btn">✓</div>
      <div class="todo-item__delete-btn">✗</div>
    </div>`
    );
  }
};