const toDoForm = document.getElementById("todo-form"); // form
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list"); // ul

const TODOS_KEY = "todos"; // 만들 todo-list의 key값

let toDos = []; // local storage에 저장할 array

function saveToDos() { // storage에 저장 func
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 값을 string으로 만들 때(원래는 array)
}

function deleteToDo(event) { 
  const li = event.target.parentElement;
  // event에는 큰 정보가 없음, 그래서 target을 뒤져봄, 그곳에서 부모 element를 보여주는 parentElement 사용(innerText로 입력한 정보까지 확인 가능)
  li.remove(); // 'X'버튼을 누른 li 제거
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) { // newTodo는 object
  const li = document.createElement("li"); 
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); // 'X' 버튼 클릭시 발생
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();  // 기본 동작을 제어
  const newTodo = toDoInput.value;  // 입력받은 input 값을 저장
  toDoInput.value = ""; // input 초기화
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // toDos 리스트에 추가
  paintToDo(newTodoObj); // Todo-list 보여주기, object를 넘겨줌
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); // list를 submit 했을 때
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); // string -> array
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// function sexyFilter(object) {
//   return object.id !== li.id
// }

// object.filter(sexyFilter) // filter는 기존 배열을 변경하지는 않음