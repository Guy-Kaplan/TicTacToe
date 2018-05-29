class GUI {

    //-------General-----------------------
    public displayBoard(board: Board, logic: Logic): void {
        document.write("<h3><u>Final Position</u>:</h3>");
        document.write("-------------<br>");
        document.write(`| ${logic.getCellContent(board.boardArray[0])} | ${logic.getCellContent(board.boardArray[1])} | ${logic.getCellContent(board.boardArray[2])} |<br>`);
        document.write(`-------------<br>`);
        document.write(`| ${logic.getCellContent(board.boardArray[3])} | ${logic.getCellContent(board.boardArray[4])} | ${logic.getCellContent(board.boardArray[5])} |<br>`);
        document.write(`-------------<br>`);
        document.write(`| ${logic.getCellContent(board.boardArray[6])} | ${logic.getCellContent(board.boardArray[7])} | ${logic.getCellContent(board.boardArray[8])} |<br>`);
        document.write(`-------------<br><br>`);
    }


    public displayBoardInAlert(board: Board, logic: Logic): void {
        alert(`-------------
| ${logic.getCellContent(board.boardArray[0])} | ${logic.getCellContent(board.boardArray[1])} | ${logic.getCellContent(board.boardArray[2])} |
-------------
| ${logic.getCellContent(board.boardArray[3])} | ${logic.getCellContent(board.boardArray[4])} | ${logic.getCellContent(board.boardArray[5])} |
-------------
| ${logic.getCellContent(board.boardArray[6])} | ${logic.getCellContent(board.boardArray[7])} | ${logic.getCellContent(board.boardArray[8])} |
-------------`);
    }

    public displayWelcomeMsg(): void {
        alert(`Welcome to my Tic-Tac-Toe game!
Here you play (as X) vs. the computer (as O).
You always go first.
The board contains 9 cells and is displayed below.
Have Fun :)
-----------
| 1 | 2 | 3 |
-----------
| 4 | 5 | 6 |
-----------
| 7 | 8 | 9 |
-----------`);
    }

    public displayErrorCellTaken(num: number): void {
        alert(`Error. Cell ${num + 1} is TAKEN. Please select a FREE cell.`);
    }

    public displayDrawMsg(): void {
        alert(`The game ended as DRAW
Game Over`);
    }
    //-------Computer-----------------------

    public displayComputerWinMoveMsg(targetCell: number): void {
        alert(`Computer puts in cell ${targetCell + 1} and WINS`);
    }

    public displayComputerWinsMsg(): void {
        alert(`Computer WINS
Game Over`);
    }

    public displayComputerBlocksMsg(targetCell: number): void {
        alert(`Computer puts in cell ${targetCell + 1} and blocks`);
    }

    public displayComputerPutsMsg(randomEmptyCell: number): void {
        alert(`Computer puts in cell ${randomEmptyCell}`);
    }
    //-------User-----------------------

    public displayUserWinsMsg(): void {
        alert(`User WINS
Game Over`);
    }

    public getUserMoveNum(): number {
        let userNum: number = Number(prompt(`Enter your move (1-9 ONLY):`));
        return userNum;
    }

    public displayErrorUserKelet1to9(): void {
        alert(`Error. Please select ONLY 1-9 for your move.`);
    }

    public displayErrorUserKeletNaN(): void {
        alert(`Error. Please enter a NUMBER for your move.`);
    }

}