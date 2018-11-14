import $ from "jquery";
import "./AddToDoForm.scss";
import { getData, setData } from "../api/dataTransfer";

class AddToDoForm {
  constructor() {
    this.data;
  }

  handleAddToDoBtn() {
    $("#add-btn").click(() => {
      const title = $("#input-title").val();
      const category = $("#input-category").val();
      const toDoId = Math.random().toString();
      if (title && category) {
        const newToDo = {
          title: title,
          category: category,
          isCompleted: false
        };
        this.data = getData();
        const newData = Object.assign(this.data, { [toDoId]: newToDo });
        setData(newData);
      }
    });
  }
}

export default AddToDoForm;
