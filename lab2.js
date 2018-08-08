let play = prompt("Do you want to play?");
if (play==="yes"){
  let userName = prompt("What is your name?")

let userHealthLives = 40;
let grantHealthLives = 10;
let wins = 0;


function losingLives(){
  return Math.floor((Math.random() * 2) +1);
}

while (userHealthLives > 0 && wins < 3) {
  userHealthLives -= losingLives();
  console.log (userName + " has " + userHealthLives + " health left.");
  grantHealthLives -= losingLives();
  console.log ("Grant the Mighty Chicken has " + grantHealthLives + " health left.");

    if (wins<3 && grantHealthLives<=0){
        wins++;
        grantHealthLives=10;
    } 

  if(wins===3){
    console.log(`${userName} wins!`);
  }
}
} else{
  console.log("thanks")
}
