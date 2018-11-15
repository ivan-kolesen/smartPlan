import $ from "jquery";
import "./SelectBar.scss";
import {getData} from "../api/dataTransfer";

class SelectBar {
  constructor() {
    this.data;
    this.selected = "";
  }

  handleSelect() {
    $("select").change((e) => {
      this.selected = e.target.value;
      const currentInputValue = $(".input-search").val();
      $(".todo-item").show();
      if (this.selected !== "") {
        const selectedCategory = this.selected;
        $(`.info-category`).filter(function () {
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
      "<option value=''>all categories</option>"
    );
    options.forEach(item => {
      const attr = (this.selected === item ? "selected" : "");
      $(".select-category").append(`<option value="${item}" ${attr}>${item}</option>`);
    });
  }
}

export default SelectBar;
