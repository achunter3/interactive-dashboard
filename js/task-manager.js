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