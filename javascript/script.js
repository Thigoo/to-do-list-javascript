const inputTodo = document.getElementById("todo");
const btnTodo = document.getElementById("add");
const formTodo = document.getElementById("todo-form");


const modal = document.getElementById("modal-edit");
const modalInput = document.getElementById("input-modal");
const modalBtn = document.getElementById("btn-modal");

const createTask = (task) => {
    const todo = document.createElement("div");
    todo.classList.add("task");

    const todoTask = document.createElement("h3");
    todoTask.innerText = task;
    todo.appendChild(todoTask);

    const finishBtn = document.createElement("button");
    finishBtn.innerHTML = "<i class='fa-solid fa-check'></i>";
    finishBtn.classList.add("finish-btn");
    todo.appendChild(finishBtn);

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "<i class='fa-solid fa-pen'></i>";
    editBtn.classList.add("edit-btn");
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-btn");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todo.appendChild(deleteBtn);

    const todoContainer = document.querySelector(".todo-tasks");
    todoContainer.appendChild(todo);

    inputTodo.value = "";
    inputTodo.focus();
}

const validateBtn = (e) => {
    const targetElement = e.target;
    const parentElement = targetElement.closest("div");

    if (targetElement.classList.contains("finish-btn") || targetElement.classList.contains("fa-check")) {
        parentElement.classList.toggle("done");
    };

    if (targetElement.classList.contains("remove-btn") || targetElement.classList.contains("fa-trash")) {
        parentElement.remove();
    };

    if (targetElement.classList.contains("edit-btn") || targetElement.classList.contains("fa-pen")) {
        openModal();
    };
}

const openModal = () => {
    const stateModal = modal.style.display;
    if (stateModal == "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

debugger;

const closeModal = (e) => {
    const target = e.target;
    if (target == modal) {
        openModal();
    }
}

formTodo.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = inputTodo.value;
    if (inputValue) {
        createTask(inputValue);
    }
})

document.addEventListener("click", validateBtn);
window.addEventListener("click", closeModal);



