const gameboard = document.querySelector('#gameboard');
const info = document.querySelector('.info');
const Reset = document.querySelector('Reset');
const scoreCircle = document.querySelector('.Circle-Score');
const scoreCross = document.querySelector('.Cross-Score');
let scoreCircleValue = 0;
let scoreCrossValue = 0;
let CheckDraw = 0;

const Cell = ["","","","","","","","",""];
let input = "circle"
info.textContent = "Circle goes first";
function InputSquare(){
    Cell.forEach((_cell,index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index
        cellElement.addEventListener('click',InputDisplay);
        gameboard.append(cellElement);
        
    })
}

InputSquare();

function InputDisplay(e){
    CheckDraw += 1;
    const InputShape = document.createElement('div');
    InputShape.classList.add(input);
    e.target.append(InputShape);    
    input = input === "circle" ? "cross" : "circle";
    info.textContent = `${input} goes now`;
    e.target.removeEventListener("click",InputDisplay);
    if (CheckDraw === 9){
        alert('Draw');
        RemoveAll();
    }else{
        CheckWin();
    }
    
}
function CheckWin(){
    const square = document.querySelectorAll(".square")

    const WinnnigPattern = [
        [0,1,2],[3,4,5],[6,7,8], //Horizontal
        [0,3,6],[1,4,7],[2,5,8],  // Vertical
        [0,4,8],[2,4,6]
    ]

     WinnnigPattern.forEach(array =>{
        const CircleWins = array.every(cell => 
            square[cell].firstChild?.classList.contains('circle'))
        if(CircleWins){
            info.textContent = "Circle Wins";
            square.forEach(square => square.replaceWith(square.cloneNode(true)))
            alert("Circle Wins");
            scoreCircleValue += 1; // Increase Circle's score
            scoreCircle.textContent = scoreCircleValue;
            RemoveAll();
            return
            
        }
        const CrossWins = array.every(cell => 
            square[cell].firstChild?.classList.contains('cross'))
        if(CrossWins){
                info.textContent = "Cross Wins"; 
                square.forEach(square => square.replaceWith(square.cloneNode(true)))
                alert("Cross Wins");
                scoreCrossValue += 1; // Increase Circle's score
                scoreCross.textContent = scoreCrossValue;
                RemoveAll();
                return
            }
     })

}

function RemoveAll() {
    const InputSquares = document.querySelectorAll('.square');
    InputSquares.forEach(square => {
      square.firstChild?.remove();
      square.addEventListener('click', InputDisplay);
      CheckDraw = 0;
    });
  }
  
