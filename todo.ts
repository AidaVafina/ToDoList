document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-todo') as HTMLFormElement;
    const todoInput = document.getElementById('todo-input') as HTMLInputElement;
    const todoList = document.getElementById('todo-items') as HTMLUListElement;

    function deleteTodo(this: HTMLBaseElement) {
        const li = this.parentElement as HTMLLIElement;
        li.remove();
    }

    function handleFormSubmit(event: Event) {
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
    }

    form.addEventListener("submit", handleFormSubmit);
});