
const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

function saveTodo(text) {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTML = 'Finalizada';
    todo.appendChild(doneBtn);

    todoList.appendChild(todo);
}

todoForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue);
    }
});

document.addEventListener('click', (ev) => {
    const targetEl = ev.target;
    const parentEl = targetEl.closest('div');
    if (targetElclassList.contains('finish-todo')) {
        parentEl.classList.toggle('done');
    }
});
