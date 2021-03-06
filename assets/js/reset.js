const homePgBtn = document.getElementById('homePgBtn');
const buttonReset = document.getElementById("reset");

const reset = () => {

    columns.forEach(col => {
        let colChildArray = Array.from(col.children);
        colChildArray.forEach(row => row.innerHTML ="");
    });

    playCount = 0;
    currentPlayer = 'player1';
    gamePlay = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
    ];

    clearTimeout(timeID);
    setTimer(15);
    changeTurn();

    columns.forEach((current) => {
        current.addEventListener('click', mainGame);
    });
};

const hideEndGamePopUp = () => {
    endGamePopUp.classList.add("hidden");
};

const goToHomePg = () => {
    mainPanel.classList.remove('vanish');
    mainPanel.classList.remove('hidden');
};

buttonReset.addEventListener("click", reset);
buttonReset.addEventListener("click", hideEndGamePopUp);
buttonReset.addEventListener('mouseenter', playBip);

homePgBtn.addEventListener('mouseenter', playBip);
homePgBtn.addEventListener("click", reset);
homePgBtn.addEventListener('click', hideEndGamePopUp);
homePgBtn.addEventListener('click', goToHomePg);