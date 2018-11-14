import $ from "jquery";
import "./SelectBar.scss";
import { getData } from "../api/dataTransfer";

class SelectBar {
  constructor() {
    this.data;
  }

  handleSelect() {
    $("select").change(function() {
      const selectedCategory = this.value;
      const currentInputValue = $(".input-search").val();
      $(".todo-item").show();
      if (selectedCategory !== "") {
        $(`.info-category`).filter(function(){
          return $(this).text() !== selectedCategory;
        })
          .parent()
          .parent()
          .hide();
      }
      $(`.info-title:not(:contains(${currentInputValue}))`)
        .parent()
        .parent()
        .hide();
    });
  }

  addOptions() {
    this.data = getData();
    const options = [];
    for (let key in this.data) {
      if (options.indexOf(this.data[key].category) === -1) {
        options.push(this.data[key].category);
      }
    }
    $(".select-category").empty();
    $(".select-category").append(
      "<option value='' selected>all categories</option>"
    );
    options.forEach(item => {
      $(".select-category").append(`<option value="${item}">${item}</option>`);
    });
  }
}

export default SelectBar;
