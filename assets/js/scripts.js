const form = document.querySelector(".form");
const input = form.querySelector(".form__input-text");

const toDoListElement = document.querySelector(".to-do-list");

const toDoList = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  toDoList.push({
    complete: false,
    value: input.value,
  });

  updateListView(toDoList);

});

function changeComplete(id) {
  toDoList[id].complete = !toDoList[id].complete;
  updateListView();
}
function deleteToDo(id) {
  toDoList.splice(id, 1);
  updateListView();
}

function updateListView() {
  toDoListElement.innerHTML = "";
  toDoList.forEach((todo, index) => {
    const element = createTemplate({
      id: index,
      value: todo.value,
      complete: todo.complete,
    });
    toDoListElement.appendChild(element);
  });
}

function createTemplate({ id, value, complete }) {
  const element = document.createElement("div");
  const classList = complete ? "to-do to-do--complete" : "to-do";
  element.classList = classList;
  element.id = `todo${id}`;
  element.innerHTML = `
  <div>
  <input type="checkbox" onchange="changeComplete(${id})" ${
    complete ? "checked" : null
  }>
  <span>${value}</span>
  </div>
  <button onclick="deleteToDo(${id})" class="delete-button">Apagar</button>
  `;
  return element;
}
