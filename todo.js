// Получаем ссылки на нужные элементы
const form = document.getElementById('form-todo');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-items');

// Обработчик события при клике на кнопку "Удалить"
function deleteTodo() {
    const li = this.parentElement; // Получаем родительский элемент кнопки - элемент списка li
    li.remove(); // Удаляем задачу из списка задач
}

// Обработчик события при отправке формы
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const task = todoInput.value;
    if (task !== "") {
        const li = document.createElement("li");
        li.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);

        const span = document.createElement("span");
        span.textContent = task;
        li.appendChild(span);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", deleteTodo);
        li.appendChild(deleteButton);

        todoList.appendChild(li);

        todoInput.value = "";
    }
});