let box = document.querySelectorAll(".box");
let btn = document.querySelector("#reset");
let newBtn = document.querySelector("#msg");
let newGame = document.querySelector("#new");
let newContainer = document.querySelector(".new-container");
let turn0 = true;
const reset = () =>
    {
        turn0=true;
        ablebox();
        newContainer.classList.add("hide");
    }
const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
box.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box is clicked")
        if(turn0)
            {
                box.innerHTML = "0";
                turn0 = false;
            }
            else{
                box.innerHTML = "X";
                turn0 = true;
            }
            box.disabled=true;
            let count=0;
            count++;

            let isWinner = checkWinner();
        
            if (count === 9 && !isWinner) {
              gameDraw();
            }
          });
        });
        
        const gameDraw = () => {
          newBtn.innerText = `Game was a Draw.`;
          newContainer.classList.remove("hide");
          disablebox();
        };
     const disablebox =( ) => {
        for ( let boxes of box ){
            boxes.disabled=true;
     }};
     const ablebox =( ) => {
        for ( let boxes of box ){
            boxes.disabled=false;
            boxes.innerHTML="";
     }};
     const showWinner = (winner)=>{
    newBtn.innerHTML= `Congratulations!! winner is ${winner}`;
    newBtn.style.color="red";
    newBtn.style.fontSize="30px";
    newBtn.style.fontWeight="bold";
     newContainer.classList.remove("hide");
    disablebox();

     }
    const checkWinner = () => {
    for( let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
       let pos1= box[pattern[0]].innerHTML;
       let pos2= box[pattern[1]].innerHTML;
        let pos3= box[pattern[2]].innerHTML;
        if(pos1!=""&& pos2!=""&& pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1)
                showWinner(pos1);
            }
        }
    }
};
newBtn.addEventListener("click",reset);
btn.addEventListener("click",reset);
newGame.addEventListener("click",reset);