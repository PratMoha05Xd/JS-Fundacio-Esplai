var userChoice;
var computerChoice;

var icons = document.getElementsByClassName('icon');
for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', handleClick);
}

function handleClick(event) {
    userChoice = event.target.id;
    computerChoice = generateComputerChoice();
    displayResult();
}

function generateComputerChoice() {
    var choices = ['🪨', '📋', '✂️'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function displayResult() {
    var result;
    if (userChoice === computerChoice) {
        result = "Empate!";
    } else if (
        (userChoice === '🪨' && computerChoice === '✂️') ||
        (userChoice === '📋' && computerChoice === '🪨') ||
        (userChoice === '✂️' && computerChoice === '📋')
    ) {

        result = "Has Ganado!";
    } else {

        result = "Has perdido! :(";
    }

    var message = "Tú elegiste: " + capitalizeFirstLetter(userChoice) + "<br>" +
        "La computadora eligió: " + capitalizeFirstLetter(computerChoice) + "<br>" +
        "Resultado: " + result;
    document.write("<h2>Resultado:</h2>");
    document.write("<p>" + message + "</p>");

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}