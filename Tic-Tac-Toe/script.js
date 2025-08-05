let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");

let msg=document.querySelector('#msg')
let drawn=document.querySelector('#drawn')
let newGameBtn=document.querySelector('.newGame-btn')

let count=0;
let flag=false;

let winnerPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnX = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerHTML = "X";
      box.style.color="white"
      turnX = false;
    } else {
      box.innerHTML = "O";
      box.style.color="black"
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
    count++;
    if(count==9 && flag===false){
      drawn.classList.remove('hidden')
      drawn.innerHTML="Match Drawn"
    }
  });
});


let checkWinner=()=>{
  for(let pattern of winnerPattern){
      let pos1Val=boxes[pattern[0]].innerHTML
      let pos2Val=boxes[pattern[1]].innerHTML
      let pos3Val=boxes[pattern[2]].innerHTML
  

  if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
    if(pos1Val===pos2Val && pos2Val===pos3Val){
      displayWinner(pos3Val);
      flag=true;
    }
  }

}
}

let displayWinner=(winner)=>{
  doDisable();
  msg.classList.remove('hidden')
  newGameBtn.classList.remove('hidden')
  msg.innerHTML=`Congratulations 🎉🎉 The Winner of the Game is ${winner}👏`
}

let doDisable=()=>{
  boxes.forEach((box)=>{
    box.disabled=true;
  })
}

let doEnable=()=>{
  boxes.forEach((box)=>{
    box.disabled=false;
    box.innerHTML="";
    count=0;
    flag=false
  })
  drawn.classList.add('hidden'); 
  drawn.innerHTML = "";
}

newGameBtn.addEventListener("click",()=>{
  doEnable();
  msg.classList.add('hidden')
  newGameBtn.classList.add('hidden')
  turnX=true;
  count=0;
  flag=false

})

resetBtn.addEventListener('click',()=>{
  doEnable();
  msg.classList.add('hidden')
  newGameBtn.classList.add('hidden')
  turnX=true;
  count=0
  flag=false

})