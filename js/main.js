var userDiv     = document.getElementById('user');
var compDiv     = document.getElementById('comp');
var rockBtn     = document.getElementById('rock');
var paperBtn    = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var resultsDiv  = document.getElementById('results');

choices = ['rock', 'paper', 'scissors'];

function game(e){
    var userChoice = e.target.id;
    userDiv.innerHTML = `<img class="choice" src="./assets/${userChoice}.jpg">`;
    var compChoice = choices[Math.floor(Math.random()*choices.length)];
    compDiv.innerHTML = `<img class="choice" src="./assets/${compChoice}.jpg">`
    var result = '';

    if(userChoice == 'rock'){
        if(compChoice == 'rock'){
            result = 'Tie'
        }
        if(compChoice == 'paper'){
            result = 'Loss'
        }
        if(compChoice == 'scissors'){
            result = 'Win'
        }
    }
    if(userChoice == 'paper'){
        if(compChoice == 'rock'){
            result = 'Win'
        }
        if(compChoice == 'paper'){
            result = 'Tie'
        }
        if(compChoice == 'scissors'){
            result = 'Loss'
        }
    }
    if(userChoice == 'scissors'){
        if(compChoice == 'rock'){
            result = 'Loss'
        }
        if(compChoice == 'paper'){
            result = 'Win'
        }
        if(compChoice == 'scissors'){
            result = 'Tie'
        }
    }

    resultsDiv.innerHTML = `<h1>${result}</h1>`

}

rockBtn.addEventListener('click', game);
paperBtn.addEventListener('click', game);
scissorsBtn.addEventListener('click', game);


