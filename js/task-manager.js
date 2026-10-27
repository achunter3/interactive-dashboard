// ===== Task Manager =====
// Array that stores every task object.
let tasks = [];
// The task currently being edited (null means none).
let editingTask = null;
// Counter that gives each task a unique id.
let nextId = 1;

// Create the <ul> and put it inside the task-list div.
let user_tasks = document.createElement("ul");
user_tasks.id = "user-tasks";
document.getElementById("task-list").appendChild(user_tasks);

// Add a task from the form.
function addTask() {
    let name = document.getElementById("task-name").value.trim();
    if (name === "") {
        return; // don't add empty tasks
    }
    tasks.push({
        id: nextId,
        name: name,
        priority: document.getElementById("task-priority").value,
        isImportant: document.getElementById("task-important").checked,
        isCompleted: false
    });
    nextId++;
    document.getElementById("task-name").value = "";
    displayTasks();
    console.log(JSON.stringify(tasks));
}

// Mark a task complete (click again to undo).
function completeTask(task) {
    task.isCompleted = !task.isCompleted;
    displayTasks();
    console.log(JSON.stringify(tasks));
}

// Switch a task into edit mode.
function startEdit(task) {
    editingTask = task;
    displayTasks();
}

// Save the changes from the edit form.
function saveEdit(task, newName, newPriority, newImportant) {
    if (newName.trim() === "") {
        return; // don't allow an empty name
    }
    task.name = newName.trim();
    task.priority = newPriority;
    task.isImportant = newImportant;
    editingTask = null;
    displayTasks();
    console.log(JSON.stringify(tasks));
}

// Leave edit mode without saving.
function cancelEdit() {
    editingTask = null;
    displayTasks();
}

// Delete one task.
function deleteTask(task) {
    tasks.splice(tasks.indexOf(task), 1);
    displayTasks();
    console.log(JSON.stringify(tasks));
}

// Delete the whole list.
function deleteList() {
    tasks = [];
    editingTask = null;
    displayTasks();
    console.log(JSON.stringify(tasks));
}

// Clear the <ul> and redraw every task from the array.
function displayTasks() {
    user_tasks.innerHTML = "";

    tasks.forEach(function (task) {
        let li = document.createElement("li");

        // Pick a color based on priority.
        let color;
        if (task.priority === "High") {
            color = "darkorange";
        } else if (task.priority === "Medium") {
            color = "goldenrod";
        } else {
            color = "seagreen";
        }
        li.style.borderLeftColor = color;

        if (task === editingTask) {
            // ----- Edit mode: show a small form -----
            li.className = "editing";

            let nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.value = task.name;

            let prioritySelect = document.createElement("select");
            prioritySelect.innerHTML = "<option>High</option><option>Medium</option><option>Low</option>";
            prioritySelect.value = task.priority;

            let importantLabel = document.createElement("label");
            let importantBox = document.createElement("input");
            importantBox.type = "checkbox";
            importantBox.checked = task.isImportant;
            importantLabel.appendChild(importantBox);
            importantLabel.appendChild(document.createTextNode(" Important"));

            let saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.className = "btn btn-sm btn-primary";
            saveBtn.addEventListener("click", function () {
                saveEdit(task, nameInput.value, prioritySelect.value, importantBox.checked);
            });

            let cancelBtn = document.createElement("button");
            cancelBtn.textContent = "Cancel";
            cancelBtn.className = "btn btn-sm btn-outline-secondary";
            cancelBtn.addEventListener("click", cancelEdit);

            li.appendChild(nameInput);
            li.appendChild(prioritySelect);
            li.appendChild(importantLabel);
            li.appendChild(document.createElement("br"));
            li.appendChild(saveBtn);
            li.appendChild(cancelBtn);
        } else {
            // ----- Normal mode: name, priority, buttons -----
            let nameSpan = document.createElement("span");
            nameSpan.textContent = task.name;

            // Important tasks are red
            if (task.isImportant) {
                nameSpan.style.color = "red";
                nameSpan.style.fontWeight = "bold";
            }

            // Completed tasks get a strikethrough
            if (task.isCompleted) {
                nameSpan.style.textDecoration = "line-through";
            }

            // Priority label
            let prioritySpan = document.createElement("span");
            prioritySpan.className = "priority-label";
            prioritySpan.textContent = task.priority;
            prioritySpan.style.backgroundColor = color;

            // Complete button (a DOM node)
            let completeBtn = document.createElement("button");
            completeBtn.textContent = task.isCompleted ? "Undo" : "Complete";
            completeBtn.className = "btn btn-sm btn-success";
            completeBtn.addEventListener("click", function () {
                completeTask(task);
            });

            // Edit button (a DOM node)
            let editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.className = "btn btn-sm btn-secondary";
            editBtn.addEventListener("click", function () {
                startEdit(task);
            });

            li.appendChild(nameSpan);
            li.appendChild(prioritySpan);
            li.appendChild(document.createElement("br"));
            li.appendChild(completeBtn);
            li.appendChild(editBtn);

            // Delete button (a DOM node)
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "btn btn-sm btn-outline-danger";
            deleteBtn.addEventListener("click", function () {
                deleteTask(task);
            });
            li.appendChild(deleteBtn);
        }

        user_tasks.appendChild(li);
    });
}

// Add Task button or Enter key
document.getElementById("task-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
});

document.getElementById("delete-list").addEventListener("click", deleteList);

// ===== Weekly Goal Calculator =====
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Weekly Goal: Calculate the total weekly task goal for a user.
    // Output message to console
    console.log("Checking status for: " + userName);
    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5;
    // Add bonusTasks to weeklyGoal. 
    let totalGoal = weeklyGoal + bonusTasks;
    let output = 'User: ' + userName + '<br>' + 'Total Weekly Goal: ' + totalGoal;
    console.log(output);
    document.getElementById("goal-message").innerHTML = output;
}

document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();
    let userName = document.getElementById("name").value;
    let dailyGoal = parseFloat(document.getElementById("daily_task_goal").value);
    let bonusTasks = parseFloat(document.getElementById("weekly_bonus_tasks").value);
    weeklyGoal(userName, dailyGoal, bonusTasks);
});