var GUI = /** @class */ (function () {
    function GUI() {
    }
    //-------General-----------------------
    GUI.prototype.displayBoard = function (board, logic) {
        document.write("<h3><u>Final Position</u>:</h3>");
        document.write("-------------<br>");
        document.write("| " + logic.getCellContent(board.boardArray[0]) + " | " + logic.getCellContent(board.boardArray[1]) + " | " + logic.getCellContent(board.boardArray[2]) + " |<br>");
        document.write("-------------<br>");
        document.write("| " + logic.getCellContent(board.boardArray[3]) + " | " + logic.getCellContent(board.boardArray[4]) + " | " + logic.getCellContent(board.boardArray[5]) + " |<br>");
        document.write("-------------<br>");
        document.write("| " + logic.getCellContent(board.boardArray[6]) + " | " + logic.getCellContent(board.boardArray[7]) + " | " + logic.getCellContent(board.boardArray[8]) + " |<br>");
        document.write("-------------<br><br>");
    };
    GUI.prototype.displayBoardInAlert = function (board, logic) {
        alert("-------------\n| " + logic.getCellContent(board.boardArray[0]) + " | " + logic.getCellContent(board.boardArray[1]) + " | " + logic.getCellContent(board.boardArray[2]) + " |\n-------------\n| " + logic.getCellContent(board.boardArray[3]) + " | " + logic.getCellContent(board.boardArray[4]) + " | " + logic.getCellContent(board.boardArray[5]) + " |\n-------------\n| " + logic.getCellContent(board.boardArray[6]) + " | " + logic.getCellContent(board.boardArray[7]) + " | " + logic.getCellContent(board.boardArray[8]) + " |\n-------------");
    };
    GUI.prototype.displayWelcomeMsg = function () {
        alert("Welcome to my Tic-Tac-Toe game!\nHere you play (as X) vs. the computer (as O).\nYou always go first.\nThe board contains 9 cells and is displayed below.\nHave Fun :)\n-----------\n| 1 | 2 | 3 |\n-----------\n| 4 | 5 | 6 |\n-----------\n| 7 | 8 | 9 |\n-----------");
    };
    GUI.prototype.displayErrorCellTaken = function (num) {
        alert("Error. Cell " + (num + 1) + " is TAKEN. Please select a FREE cell.");
    };
    GUI.prototype.displayDrawMsg = function () {
        alert("The game ended as DRAW\nGame Over");
    };
    //-------Computer-----------------------
    GUI.prototype.displayComputerWinMoveMsg = function (targetCell) {
        alert("Computer puts in cell " + (targetCell + 1) + " and WINS");
    };
    GUI.prototype.displayComputerWinsMsg = function () {
        alert("Computer WINS\nGame Over");
    };
    GUI.prototype.displayComputerBlocksMsg = function (targetCell) {
        alert("Computer puts in cell " + (targetCell + 1) + " and blocks");
    };
    GUI.prototype.displayComputerPutsMsg = function (randomEmptyCell) {
        alert("Computer puts in cell " + randomEmptyCell);
    };
    //-------User-----------------------
    GUI.prototype.displayUserWinsMsg = function () {
        alert("User WINS\nGame Over");
    };
    GUI.prototype.getUserMoveNum = function () {
        var userNum = Number(prompt("Enter your move (1-9 ONLY):"));
        return userNum;
    };
    GUI.prototype.displayErrorUserKelet1to9 = function () {
        alert("Error. Please select ONLY 1-9 for your move.");
    };
    GUI.prototype.displayErrorUserKeletNaN = function () {
        alert("Error. Please enter a NUMBER for your move.");
    };
    return GUI;
}());
//# sourceMappingURL=GUI.js.map