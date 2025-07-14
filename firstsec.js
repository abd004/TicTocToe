let counter = 0;
let player1 = [];
let player2 = [];


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let player1Wins=0
let player2Wins=0



function winnerOrWhat(player){
    for(let pat of winPatterns){
        if (pat.every(index => player.includes(index))) {
            return 1;
        }
    }
    return 0;
}

const x = document.querySelectorAll("button.box"); // Select all buttons with a specific class
const buttons = [...x];

function reset(){
    buttons.forEach(button=>{
        button.innerText=''
        button.style.backgroundColor='white'
    })
    player1.splice(0)
    player2.splice(0)
}

const player1res=document.getElementById('player1')
const player2res=document.getElementById('player2')



buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
        if (counter % 2 == 0) {
            if (button.innerText!='O') {
                button.innerText='X'
                button.style.backgroundColor='Red'
                player1.push(buttons.indexOf(button));
                counter++;
                if(winnerOrWhat(player1)){
                player1Wins+=1;
                
                player1res.innerText=`Player 1:  ${player1Wins}`
                reset();
        }
            } else {
                alert("choose another place");
            }
        } else {
            if (button.innerText!='X') {
                button.innerText='O'
                button.style.backgroundColor='yellow'
                player2.push(buttons.indexOf(button));
                counter++;
                if(winnerOrWhat(player2)){
                player2Wins+=1;
                player2res.innerText=`Player 2:  ${player2Wins}`
                reset();
        }
            } else {
                alert("choose another place");
            }
        }
    });
});


const restBtn = document.getElementById('endgame')
restBtn.addEventListener('click',function(event){
        reset();
        player1res.innerText=`Player 1:  0`
        player2res.innerText=`Player 2:  0`
})