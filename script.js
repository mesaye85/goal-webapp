const goalForm = document.querySelector("#goal-form");
const taskInput = document.querySelector("#task");
const goalInput = document.querySelector("#goal");
const taskList = document.querySelector("#task-list");
const progressBar = document.querySelector("#progress-bar");
const quoteDisplay = document.querySelector("#quote");

let tasks = [];

goalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";
});

const addTask = (task) => {
  tasks.push(task);
  updateTaskList();
  updateProgress();
};

const updateTaskList = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    taskList.innerHTML +=
`<li class="task-item" data-index="${index}"> <input type="checkbox" class="task-checkbox"> <span>${task}</span> </li> ;
});

const taskCheckboxes = document.querySelectorAll(".task-checkbox");
taskCheckboxes.forEach((checkbox) => {
checkbox.addEventListener("change", (event) => {
const taskIndex = event.target.parentElement.dataset.index;
tasks.splice(taskIndex, 1);
updateTaskList();
updateProgress();
});
});
};

const updateProgress = () => {
const totalTasks = tasks.length;
const completedTasks = document.querySelectorAll(".task-checkbox:checked").length;
const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
progressBar.style.width = ${progress}%;
};
