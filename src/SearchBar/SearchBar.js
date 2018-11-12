import $ from "jquery";
import "./SearchBar.scss";

class SearchBar{
  constructor(){}

  handleInput(){
    $(".input-search").keyup(function(){
      const currentCategoryValue = $(".select-category").val();
      $(".todo-item").show();
      $(`.info-title:not(:contains(${this.value}))`).parent().parent().hide();
      $(`.info-category:not(:contains(${currentCategoryValue}))`).parent().parent().hide();
    })
  };
}

export default SearchBar;