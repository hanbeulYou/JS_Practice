const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== li.id);
  saveToDos();
}

function paintToDo(newToDo){
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  span.innerText = newToDo.text;
  button.innerText = "❌";  
  button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//   console.log("This is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); 
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  // parsedToDos.forEach(sayHello);
  // parsedToDos.forEach(item => console.log("This is the turn of", item));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}