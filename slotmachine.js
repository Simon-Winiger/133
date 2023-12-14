const button = document.getElementById('button');
var images = ['img/Divenaldo.PNG', 'img/Ben.png', 'img/Ghostnaldo.jpg', 'img/GhostOfRiyadh.jpg', 'img/Harry_Maguire.jpeg', 'img/Ronaldo.png'];
var AusgabeText = document.getElementById('AusgabeText');
var WinDisplay = document.getElementById('wins');
var BalanceDisplay = document.getElementById('balance');
let wins = "0";
let balance = 2000;
let wager = 10;



button.addEventListener('click', slotMachine);
BalanceDisplay.innerHTML = balance;


function slotMachine() {
    // function body
    var randomOne = Math.round(Math.random() * 5);
    var randomTwo = Math.round(Math.random() * 5);
    var randomThree = Math.round(Math.random() * 5);

    console.log(randomOne);
    console.log(randomTwo);
    console.log(randomThree);

    document.getElementById('imageOne').src = images[randomOne];
    document.getElementById('imageTwo').src = images[randomTwo];
    document.getElementById('imageThree').src = images[randomThree];




    if (randomOne == randomTwo && randomOne == randomThree) {
        // drei gleiche Bilder
        AusgabeText.innerHTML = ' <h2> You Win </h2>';
        wins++;
        WinDisplay.innerHTML = wins;

        balance = balance + 300;
        BalanceDisplay.innerHTML = balance;

    } else {
        // nicht drei gleiche Bilder  
        AusgabeText.innerHTML = ' <h2> You Lose </h2>';

    }
}

function spin() {
    if (balance >= wager) {
    balance -= wager;
    slotMachine();
    BalanceDisplay.innerHTML = balance;
    }
}



