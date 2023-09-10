let time = 60;
let score = 0;
let rnNum;
const printBubbles = () => {
    for (let i = 0; i < 72; i++) {
        let rnNum = Math.floor(Math.random() * 10)
        document.querySelector(".bubbles").innerHTML += `<span onclick="matchNum(this)">${rnNum}</span>`
    }
};
const randomNumber = () => {
    rnNum = Math.floor(Math.random() * 10);
    document.querySelector("#ranNum").innerHTML = rnNum;
};
const scoreInc = () => {
    score += 10;
    document.querySelector("#score").innerHTML = score;
}
const matchNum = (e) => {
    let targetNum = Number(e.innerHTML)
    if (rnNum === targetNum) {
        scoreInc()
        randomNumber()
        document.querySelector(".bubbles").innerHTML = '';
        printBubbles()
    }
};
const timer = () => {
    let intvl = setInterval(() => {
        if (time < 0) {
            clearInterval(intvl)
            document.querySelector(".bubbles").innerHTML = `<h1>Your Score is ${score}</h1>
            <button id="replay" onclick="window.location.reload()">Replay</button>`;
        }
        else {
            if (time < 10) {
                document.querySelector("#timer").innerHTML = `0${time}`
            } else {
                document.querySelector("#timer").innerHTML = `${time}`
            }
            time--
        }
    }, 1000)
};

randomNumber()
printBubbles()
timer()