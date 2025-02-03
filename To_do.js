function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const taskText = newTaskInput.value.trim();
  
    if (taskText !== "") {
      const todoList = document.getElementById("todo-list");
      const newTaskItem = document.createElement("li");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      newTaskItem.appendChild(checkbox);
  
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
      newTaskItem.appendChild(taskSpan);
  
      // Event listener for checkbox change
      checkbox.addEventListener("change", function() {
        newTaskItem.classList.toggle("completed");
      });
  
      todoList.appendChild(newTaskItem);
      newTaskInput.value = "";
    }
  }
  
  const newTaskInput = document.getElementById("new-task");
  newTaskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });