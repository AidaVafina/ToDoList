document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form-todo');
    var todoInput = document.getElementById('todo-input');
    var todoList = document.getElementById('todo-items');
    function deleteTodo() {
        var li = this.parentElement;
        li.remove();
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        var task = todoInput.value;
        if (task !== "") {
            var li = document.createElement("li");
            li.classList.add("task");
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            li.appendChild(checkbox);
            var span = document.createElement("span");
            span.textContent = task;
            li.appendChild(span);
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Удалить";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener("click", deleteTodo);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
            todoInput.value = "";
        }
    }
    form.addEventListener("submit", handleFormSubmit);
});
//# sourceMappingURL=todo.js.map