var winner = null;

if (winner === null) {
    Game();
}

function Game() {
    var j = 0;
    var items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // all items from grid


        var a = setInterval(function () {
            var random = Math.floor(Math.random() * items.length);

            var selectedItem = items[random]; //selected box from grid
            items.splice(random, 1); //remove item from list which is set

            var e = document.getElementById(selectedItem);

            if (j % 2 === 0) {
                e.innerHTML = 'X';
            } else if (j % 2 === 1) {
                e.innerHTML = 'O';
            }
            j++;
            FindWinner("X");
            FindWinner("O");

            if (winner !== null) {
                clearInterval(a);
                ShowWinner();

            } else if (j > 8 && winner === null) {
                winner = "Nobody";
                clearInterval(a);
                ShowWinner();
            }

        }, 1000);

}


function ShowWinner() {
    document.getElementById("winner").style.display = "block";
    document.getElementById("winner").innerHTML = "Winner: " + winner;

    setTimeout(function () {
        document.getElementById('game_board').style.opacity = "0";
        document.getElementById('winner').style.opacity = "0";


        setTimeout(function () {
            location.reload()
        }, 1000) //time before new game
    }, 3000); // time before showing result
}

function FindWinner(player) {
    if (document.getElementById("1").innerHTML === player &&
        document.getElementById("5").innerHTML === player &&
        document.getElementById("9").innerHTML === player) {
        winner = player;
    } else if (document.getElementById("1").innerHTML === player &&
        document.getElementById("2").innerHTML === player &&
        document.getElementById("3").innerHTML === player) {
        winner = player;
    } else if (document.getElementById("4").innerHTML === player &&
        document.getElementById("5").innerHTML === player &&
        document.getElementById("6").innerHTML === player) {
        winner = player;
    } else if (document.getElementById("7").innerHTML === player &&
        document.getElementById("8").innerHTML === player &&
        document.getElementById("9").innerHTML === player) {
        winner = player;
    } else if (document.getElementById("3").innerHTML === player &&
        document.getElementById("5").innerHTML === player &&
        document.getElementById("7").innerHTML === player) {
        winner = player;
    }
    else if (document.getElementById("1").innerHTML === player &&
        document.getElementById("4").innerHTML === player &&
        document.getElementById("7").innerHTML === player) {
        winner = player;
    }
    else if (document.getElementById("2").innerHTML === player &&
        document.getElementById("5").innerHTML === player &&
        document.getElementById("8").innerHTML === player) {
        winner = player;
    }
    else if (document.getElementById("3").innerHTML === player &&
        document.getElementById("6").innerHTML === player &&
        document.getElementById("9").innerHTML === player) {
        winner = player;
    }
}




