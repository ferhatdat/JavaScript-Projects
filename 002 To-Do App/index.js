const form = document.querySelector(".todo_form");
const todoInput = document.querySelector(".todo_input");
const todoList = document.querySelector(".todo_container");
const addedTodos = [];
const container = document.querySelector(".container");

eventListeners();
function eventListeners() {
  form.addEventListener("submit", addTodo);
  todoList.addEventListener("click", doneOrRemove);
}
function doneOrRemove(e) {
  if (e.target.className == "fa-solid fa-square-check") {
    if (
      e.target.parentElement.previousElementSibling.style.textDecoration ==
      "line-through"
    ) {
      e.target.parentElement.previousElementSibling.style.textDecoration =
        "none";
    } else {
      e.target.parentElement.previousElementSibling.style.textDecoration =
        "line-through";
    }
  }
  if (e.target.className == "fa-solid fa-trash") {
    e.target.parentElement.parentElement.remove();
    addedTodos.splice(
      addedTodos.indexOf(e.target.parentElement.parentElement.firstChild.firstChild.textContent),1);
  }
  if (todoList.childElementCount === 0) {
    todoList.style.visibility = "hidden";
  }
}
function addTodo(e) {
  const newTodo = todoInput.value;
  if (newTodo == "") {
    showAlert("Lütfen bir todo giriniz");
  } else if (addedTodos.indexOf(newTodo) != -1) {
    showAlert("Bu todo zaten listende mevcut");
  } else {
    addedTodos.push(newTodo);
    todoList.style.visibility = "visible";
    const newdiv1 = document.createElement("div");
    const newdiv2 = document.createElement("div");
    const newdiv3 = document.createElement("div");
    newdiv1.className = "todo";
    newdiv2.className = "todo_left";
    newdiv3.className = "todo_right";
    const newSpan = document.createElement("span");
    newSpan.className = "todo_text";
    newSpan.textContent = newTodo;
    newdiv2.appendChild(newSpan);
    newdiv3.innerHTML = `<i class="fa-solid fa-square-check"></i>
    <i class="fa-solid fa-trash"></i>`;
    newdiv1.appendChild(newdiv2);
    newdiv1.appendChild(newdiv3);
    todoList.appendChild(newdiv1);
    todoInput.value = "";
  }
  e.preventDefault();
}
function showAlert(message) {
  newDiv = document.createElement("div");
  newDiv.className = "message";
  newP = document.createElement("p");
  newP.innerText = message;
  newDiv.appendChild(newP);
  form.appendChild(newDiv);

  setTimeout(() => {
    newDiv.remove();
  }, 1000);
}
