let diceimg= document.getElementById('dice')
let Player1= document.querySelector('#Player1')
let Player2= document.querySelector('#Player2')
let Fscore= document.querySelector('#score0')
let Sscore= document.querySelector('#score1')

let Ftally= document.querySelector('#Tally0')
let Stally= document.querySelector('#Tally1')
diceimg.classList.add('hidden')
Player1.classList.add('active')

let scores= [0,0]
let currentScore = 0;
let activePlayer = 0;
let Rolldice= document.getElementById('Roll')

const SwitchPlayer= function(){
    document.querySelector(`#Tally${activePlayer}`).textContent="0"
    currentScore=0;
    activePlayer= activePlayer === 0 ? 1 : 0;
    Player1.classList.toggle('active')
    Player2.classList.toggle('active')
}
Rolldice.addEventListener('click',function(){
    const dice= Math.trunc(Math.random()*6)+1;

    diceimg.classList.remove('hidden');

    diceimg.src=`Dice${dice}.png`;

    if(dice!== 1){
       currentScore+=dice
       document.querySelector(`#Tally${activePlayer}`).textContent=currentScore
    }else{
        SwitchPlayer();
    }
})

document.getElementById('Hold-btn').addEventListener('click',function(){

    scores[activePlayer]+=currentScore
    document.querySelector(`#score${activePlayer}`).textContent=scores[activePlayer];
    

    if(scores[activePlayer]>=20){
        console.log(`#Player${activePlayer}`)
        
    }
    else{
        SwitchPlayer();
    }
    

})