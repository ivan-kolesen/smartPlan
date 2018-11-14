export const getData = () => {
  return JSON.parse(localStorage.getItem("toDoList")) || {};
};

export const setData = data => {
  localStorage.setItem("toDoList", JSON.stringify(data));
};
