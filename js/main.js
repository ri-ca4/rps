var userDiv     = document.getElementById('user');
var compDiv     = document.getElementById('comp');
var rockBtn     = document.getElementById('rock');
var paperBtn    = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var resultsDiv  = document.getElementById('results');

choices = ['rock', 'paper', 'scissors'];

function game(e){
    var userChoice = e.target.id;
    userDiv.innerHTML = userChoice;
    var compChoice = choices[Math.floor(Math.random()*choices.length)];
    compDiv.innerHTML = compChoice
    var result = '';

    if(userChoice == 'rock'){
        if(compChoice == 'rock'){
            result = 'tie'
        }
        if(compChoice == 'paper'){
            result = 'loss'
        }
        if(compChoice == 'scissors'){
            result = 'win'
        }
    }
    if(userChoice == 'paper'){
        if(compChoice == 'rock'){
            result = 'win'
        }
        if(compChoice == 'paper'){
            result = 'tie'
        }
        if(compChoice == 'scissors'){
            result = 'loss'
        }
    }
    if(userChoice == 'scissors'){
        if(compChoice == 'rock'){
            result = 'loss'
        }
        if(compChoice == 'paper'){
            result = 'win'
        }
        if(compChoice == 'scissors'){
            result = 'tie'
        }
    }

    resultsDiv.innerHTML = result

}

rockBtn.addEventListener('click', game);
paperBtn.addEventListener('click', game);
scissorsBtn.addEventListener('click', game);


