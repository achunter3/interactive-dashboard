// This function will display a random answer from the answers array when the user clicks on the magic eight ball.
function displayAnswer(answers) {
    let randomIndex = Math.floor(Math.random() * answers.length);
    document.getElementById("magic-answer").innerHTML = answers[randomIndex];
    document.getElementById("circle").style.display = "block";
}
// Default answers for the magic eight ball.
let answers = [
        "It is certain.",
        "Dont count on it.",
        "Without a doubt.",
        "My sources say no.",
        "Yes, definitely.",
        "Ask again later.",
    ]
// Add event listener for the magic eight ball - This will display an answer when the user clicks on the magic eight ball.
document.getElementById("magicEightBall").addEventListener("mousedown", function(event) {
    event.preventDefault();
    question = document.getElementById("question").value.trim();
    if (question == "") {
        alert("Please enter a question before asking the Magic Eight Ball.");
    }
    else {
        displayAnswer(answers);
    }
});
// Add event listener for the reset button - This will hide the answer circle when the user wants to ask another question.
document.getElementById("reset").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("circle").style.display = "none";
});
// Add event listener for the add answer button - This will add a new answer to the answers array when the user clicks on the add answer button.
document.getElementById("add-answer").addEventListener("click", function(event) {
    event.preventDefault();
    let newAnswer = document.getElementById("new-answer").value.trim();
    if (!answers.includes(newAnswer)) {
        answers.push(newAnswer);
    }
});