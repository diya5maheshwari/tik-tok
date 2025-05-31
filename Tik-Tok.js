let btn = document.querySelectorAll('.btn');
let message = document.getElementById('message');
let value = 1;
let winers = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]

];
let xmove = [];
let omove = [];
let text = document.getElementById('text');

text.addEventListener('click', () => {
    // console.log('clicked');
    // startScreen.classList.remove('active');
    document.getElementById('startScreen').style.display = 'none';
    // Show the game board
    document.getElementById('box').style.display = 'grid';
    // box.style.display='none';
});

btn.forEach((button, index) => {
    button.addEventListener('click', () => {
        // console.log('clicked');
        button.innerHTML = 'X';
        if (button.innerHTML) {
            if (value % 2 == 0) {
                button.innerHTML = 'X';
                xmove.push(index);
            }
            else {
                button.innerHTML = '0';
                omove.push(index);
            }
            value++;
            // console.log("omove is" ,omove);
            // console.log("xmove is", xmove);
            button.classList.add('clicked');
        }

        if (checkWinner(xmove)) {
            message.innerHTML = 'player x is win!';
            disableButtons();
            // restart();
        }
        else if (checkWinner(omove)) {
            message.innerHTML = 'player o is win!';
            disableButtons();
            // restart();

        }
        else if (xmove.length + omove.length === 9) {
            message.innerHTML = "IT IS DRAW !";
        }


        // console.log(message);
    });
});
function checkWinner(moves) {
    return winers.some(combination => combination.every(index => moves.includes(index)))
}
function disableButtons() {
    btn.forEach(button => {
        button.disabled = true;
    });
}

function restart() {
    btn.forEach(button => {
        button.disabled = false;
        button.innerHTML = '';
        button.classList.remove('clicked');
    });

    message.innerHTML = '';
    xmove = [];
    omove = [];
    value = 1;
}
