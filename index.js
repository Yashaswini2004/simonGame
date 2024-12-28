let gameSeq = [];
let userSeq = [];
let color = ["green", "red", "yellow", "purple"];
let level = 0;
let start = false;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
   if (!start) {
      console.log("Game started");
      start = true;
      levelUp();
   }
});
function btnFlash(rdmBtn) {
   rdmBtn.classList.add("flash");
   setTimeout(function () {
      rdmBtn.classList.remove("flash");
   }, 200); 
}


function userFlash(userBtn) {
   userBtn.classList.add("userflash");
   setTimeout(function () {
      userBtn.classList.remove("userflash");
   }, 200);
}


function levelUp() {
   level++;
   h2.innerText = `Level ${level}`;
   let rdmIdx = Math.floor(Math.random() * 4); 
   let btnColor = color[rdmIdx];
   let rdmBtn = document.querySelector(`.${btnColor}`);
   btnFlash(rdmBtn);
   gameSeq.push(btnColor); 
   console.log("Game Sequence:", gameSeq);
}


function btnPress() {
   let btn = this; 
   let userChosenColor = btn.classList[1]; 
   userFlash(btn); 
   userSeq.push(userChosenColor); 
   console.log("User Sequence:", userSeq);

   
   if (userSeq[userSeq.length - 1] !== gameSeq[userSeq.length - 1]) {
      console.log("Wrong sequence! Game Over.");
      h2.innerText = "Game Over! Press Any Key to Restart.";
      resetGame();
   } else if (userSeq.length === gameSeq.length) {
      console.log("Correct sequence! Next level.");
      userSeq = []; 
      setTimeout(levelUp, 1000); 
   }
}


function resetGame() {
   gameSeq = [];
   userSeq = [];
   level = 0;
   start = false;
}


let allBtn = document.querySelectorAll(".btn");
allBtn.forEach(btn => {
   btn.addEventListener("click", btnPress);
});
