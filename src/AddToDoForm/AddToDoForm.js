import $ from "jquery";
import "./AddToDoForm.scss";

class AddToDoForm{
  constructor(){
    this.data;
  }

  getData(){
    this.data = JSON.parse(localStorage.getItem("toDoList")) || {};
  }

  setData(){
    localStorage.setItem("toDoList", JSON.stringify(this.data));
  }

  handleAddToDoBtn(){
    $('#add-btn').click(() => {
      const title = $('#input-title').val();
      const category = $('#input-category').val();
      const toDoId = Math.random().toString();
      if (title && category) {
        const newToDo = {
          title: title,
          category: category,
          isCompleted: false
        };
        this.getData();
        Object.assign(this.data, {[toDoId]: newToDo});
        this.setData();
      };
    });
  };
}

export default AddToDoForm;