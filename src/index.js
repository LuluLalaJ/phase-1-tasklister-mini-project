document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  // const taskForm = document.querySelector("#create-task-form");

  const getNewTask = document.querySelector('input[type=submit]')
  getNewTask.addEventListener('click', handleNewTask);


  
  function handleNewTask(event) {
    const newTask = document.querySelector('#new-task-description').value;
    addNewTask(newTask)
    event.preventDefault()
  }

  function addNewTask(task) {
    const taskList = document.querySelector('#tasks')
    const newListItem = document.createElement('li')
    const newButton = document.createElement('button')

    newListItem.textContent = task
    newButton.textContent = "x"
    taskList.append(newListItem)
    taskList.append(newButton)
    newButton.addEventListener('click', deleteButton)
  }

    function deleteButton(event) {
      event.target.previousSibling.remove()
      event.target.remove();
    }
  
});