import $ from "jquery";
import "./ToDoItem.scss";

class ToDoItem {
  constructor(key, item) {
    this.key = key;
    this.item = item;
  }

  render() {
    const className = this.item.isCompleted
      ? "todo-item todo-item_completed"
      : "todo-item";
    $(".todo-items").append(
      `<div class="${className}" id=${this.key}>
            <div class="todo-item__info">
              <div class="info-title">${this.item.title}</div>
              <div class="info-category">${this.item.category}</div>
            </div>
            <div class="todo-item__complete-btn">✓</div>
            <div class="todo-item__delete-btn">✗</div>
        </div>`
    );
  }
}

export default ToDoItem;
