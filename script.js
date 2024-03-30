document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  const todoList = document.getElementById("todolist");

  // Function to add a new task to the list
  function addTask(taskText) {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create an Edit button for the task
    const editButton = document.createElement("a");
    editButton.textContent = "Edit";
    editButton.setAttribute("href", "#");
    editButton.addEventListener("click", function () {
      const newText = prompt("Enter the new task text:", listItem.textContent);
      if (newText !== null) {
        listItem.textContent = newText;
      }
    });

    // Create a Delete button for the task
    const deleteButton = document.createElement("a");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("href", "#");
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

    // Append the Edit and Delete buttons to the list item
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Append the list item to the to-do list
    todoList.appendChild(listItem);
  }

  // Event listener for the add button
  button.addEventListener("click", function () {
    const taskText = input.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      input.value = ""; // Clear the input field after adding the task
    }
  });

  // Event listener for the Enter key
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      button.click(); // Simulate a click on the add button when Enter is pressed
    }
  });
});
