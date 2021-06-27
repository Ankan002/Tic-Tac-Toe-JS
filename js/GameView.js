export default class GameView{
    

    updateBoard(game){
        this.updateTurn(game);
        const winningCombination= game.findWinningCombinations();
        console.log(game.board)
        for(let i=0; i<game.board.length; i++){
            const tile= document.querySelector(`.board-tile[data-index="${i}"]`);
            tile.classList.remove("tile-winner");
            document.querySelector(".left h1").innerHTML="Lets Play <br> the Tic-Tac-Toe <br> Game!";
            let tileText= game.board[i]== "X" ? "Player X" : "Player O";
            let tileType= game.board[i]== "X" ? "tile-X" : "tile-O";
            tile.innerHTML=`<span class=${tileType}>${game.board[i] ? game.board[i] : ""}</span>`;
            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
            }
            if(winningCombination){
                document.querySelector(".left h1").innerHTML=`🎉🎉<br><span class=${tileType}>${tileText}</span> has won the GAME!!<br>🎉🎉`;
            }
        }
    }

    updateTurn(game){
        let playerX= document.querySelector(".player-X");
        let playerO= document.querySelector(".player-O");
        playerX.classList.remove("active");
        playerO.classList.remove("active");
        if(game.turn=="X"){
            playerX.classList.add("active");
        }
        else{
            playerO.classList.add("active");
        }
    }
    
}