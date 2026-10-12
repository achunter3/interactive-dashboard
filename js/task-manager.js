let myTasks = [];
// Create the unordered list.
let user_tasks = document.createElement("ul");
// Assign an ID to the unordered list.
user_tasks.id = "user-tasks";
// Find the task-list div and append the ul to it.
let taskList = document.getElementById("task-list");
taskList.appendChild(user_tasks);


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

document.getElementById("add-task").addEventListener("click",function (event) {
        event.preventDefault();
        // Get the task input element.
        let new_task =
            document.getElementById("task-name");
        // Save the entered task before clearing the input.
        let task_text = new_task.value.trim();
        if (task_text !== "") {
            // Add the task to the array.
            myTasks.push(task_text);
            // Create the list item.
            let task_item = document.createElement("li");
            // Put the task text inside the list item.
            task_item.textContent = task_text;
            // Append the li to the dynamically created ul.
            user_tasks.appendChild(task_item);
            // Log the task before clearing the input.
            console.log("Task added: " + task_text);
            console.log(myTasks);
            // Clear and refocus the input.
            new_task.value = "";
            new_task.focus();
        }
    }
);

// Pressing Enter in the task input submits the form, which would reload the page.
// Stop the reload and add the task instead.
document.getElementById("task-name").form.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("add-task").click();
});
