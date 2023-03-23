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
    const newButton = document.createElement('input')

    newListItem.textContent = task
    newButton.type = "button"
    newButton.value = "x"
    newButton.className = "deleteButton"
    taskList.append(newListItem)
    taskList.appendChild(newButton)
  }

    const deleteButton = document.querySelector(".deleteButton")
    console.log(deleteButton)
  //   deleteButton.addEventListener('click', deleteTask)
    
  //   function deleteTask(event) {
  //     event.target.remove()
  // }

});