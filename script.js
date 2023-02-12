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
