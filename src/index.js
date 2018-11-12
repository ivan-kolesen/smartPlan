import "bootstrap/dist/css/bootstrap.min.css";
import scss from "../styles/style.scss";
import $ from "jquery";

$(document).ready(() => {
  const toDoList = JSON.parse(localStorage.getItem("toDoList")) || {};

  $('#add-btn').click(() => {
    const toDoId = Math.random().toString();
    const newToDo = {
      title: $('#input-title').val(),
      category: $('#input-category').val(),
      issCompleted: false
    };
    Object.assign(toDoList, {[toDoId]: newToDo});
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  });

});