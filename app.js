"use strict";
const container = document.getElementById("container");
const textTodo = document.getElementById("text-todo");
const btn = document.getElementById("submit");
let count = 0;

//Function to create a Todo Div
function addTodo() {
  //create a Todo Div
  const listTodo = document.createElement("div");
  listTodo.classList.add("list-todo");

  //Create a Delete btn
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("del-btn");

  //Create a text content
  const p = document.createElement("p");
  p.textContent = `${count++}:  ${textTodo.value}`;

  //Attach to HTML
  listTodo.appendChild(p);
  listTodo.appendChild(delBtn);
  container.appendChild(listTodo);
  textTodo.value = "";
}

//Function to delete a Todo Div
function deleteTodo(e) {
  const item = e.target;
  if (item.classList.value === "del-btn") {
    const todo = item.parentElement;
    todo.remove();
    count--;
    console.log(item.classList);
  }
}

//Attach event to HTML
btn.addEventListener("click", addTodo);
container.addEventListener("click", deleteTodo);
