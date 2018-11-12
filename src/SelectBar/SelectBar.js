import $ from "jquery";
import "./SelectBar.scss";

class SelectBar{
  constructor(){
    this.data;
  }

  getData(){
    this.data = JSON.parse(localStorage.getItem("toDoList")) || {};
  }

  handleSelect(){
    $("select").change(function() {
      const currentInputValue = $(".input-search").val();
      $(".todo-item").show();
      if(this.value !== "") {
        $(`.info-category:not(:contains(${this.value}))`).parent().parent().hide();
      }
      $(`.info-title:not(:contains(${currentInputValue}))`).parent().parent().hide();
    });
  };

  addOptions(){
    this.getData();
    const options = [];
    for (let key in this.data){
      if(options.indexOf(this.data[key].category) === -1){
        options.push(this.data[key].category)
      }
    }
    $('.select-category').empty();
    $('.select-category').append("<option value='' selected>all categories</option>");
    options.forEach((item) => {
      $('.select-category').append(`<option value="${item}">${item}</option>`);
    });
  };
}

export default SelectBar;