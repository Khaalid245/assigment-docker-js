let tasks = [];

function addTask() {
  const taskInputField = document.getElementById('taskInputField');
  const taskName = taskInputField.value.trim();

  if (taskName !== '') {
    tasks.push({ name: taskName, completed: false });
    renderTasks();
    taskInputField.value = '';
  }
}

function removeTask() {
  if (tasks.length > 0) {
    tasks.pop(); // Remove the last task from the array
    renderTasks();
  }
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.name;

    if (task.completed) {
      listItem.classList.add('completed');
    }

    listItem.addEventListener('click', () => toggleTaskCompletion(index));
    taskList.appendChild(listItem);
  });
}
