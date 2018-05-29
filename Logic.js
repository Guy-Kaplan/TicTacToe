var Logic = /** @class */ (function () {
    function Logic() {
    }
    //-------General-----------------------
    Logic.prototype.getRandomNumberBetweenMinAndMax = function (min, max) {
        var random;
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    };
    Logic.prototype.isTheGameDraw = function (board) {
        var i;
        var numOfEmptyCells = 0;
        for (i = 0; i < board.boardArray.length; i++) {
            if (this.getCellContent(board.boardArray[i]) != "X" && this.getCellContent(board.boardArray[i]) != "O") {
                numOfEmptyCells++;
            }
        }
        if (numOfEmptyCells == 0) {
            return true; // Draw
        }
        return false;
    };
    Logic.prototype.isGameOver = function (board, logic) {
        if (this.isTheGameDraw(board)) {
            return true;
        }
        if (this.isUserWinner(board, logic)) {
            return true;
        }
        if (this.isComputerWinner(board, logic)) {
            return true;
        }
        return false;
    };
    Logic.prototype.isRowFullOfGivenChar = function (board, logic, char) {
        // If so: returns true
        // If not: returns false
        // char = "X" / "O"
        var counterOfChars = 0;
        var i;
        for (i = 0; i <= 2; i++) {
            if (logic.getCellContent(board.boardArray[i]) == char) {
                counterOfChars++;
            }
        }
        if (counterOfChars == 3) {
            return true; // row 1: cells 0,1,2
        }
        counterOfChars = 0;
        for (i = 3; i <= 5; i++) {
            if (logic.getCellContent(board.boardArray[i]) == char) {
                counterOfChars++;
            }
        }
        if (counterOfChars == 3) {
            return true; // row 2: cells 3,4,5
        }
        counterOfChars = 0;
        for (i = 6; i <= 8; i++) {
            if (logic.getCellContent(board.boardArray[i]) == char) {
                counterOfChars++;
            }
        }
        if (counterOfChars == 3) {
            return true; // row 3: cells 6,7,8
        }
        return false;
    };
    Logic.prototype.isColumnFullOfGivenChar = function (board, logic, char) {
        // If so: returns true
        // If not: returns false
        // char = "X" / "O"
        var counterOfChars = 0;
        var i;
        for (i = 0; i <= 6; i += 3) {
            if (logic.getCellContent(board.boardArray[i]) == char) {
                counterOfChars++;
            }
        }
        if (counterOfChars == 3) {
            return true; // column 1: cells 0,3,6
        }
        counterOfChars = 0;
        for (i = 1; i <= 7; i += 3) {
            if (logic.getCellContent(board.boardArray[i]) == char) {
                counterOfChars++;
            }
        }
        if (counterOfChars == 3) {
            return true; // column 2: cells 1,4,7
        }
        counterOfChars = 0;
        for (i = 2; i <= 8; i += 3) {
            if (logic.getCellContent(board.boardArray[i]) == char) {
                counterOfChars++;
            }
        }
        if (counterOfChars == 3) {
            return true; // column 3: cells 2,5,8
        }
        return false;
    };
    Logic.prototype.isSlantFullOfGivenChar = function (board, logic, char) {
        // If so: returns true
        // If not: returns false
        // char = "X" / "O"
        var counterOfChars = 0;
        var i;
        for (i = 0; i <= 8; i += 4) {
            if (logic.getCellContent(board.boardArray[i]) == char) {
                counterOfChars++;
            }
        }
        if (counterOfChars == 3) {
            return true; // slant 1: cells 0,4,8
        }
        counterOfChars = 0;
        for (i = 2; i <= 6; i += 2) {
            if (logic.getCellContent(board.boardArray[i]) == char) {
                counterOfChars++;
            }
        }
        if (counterOfChars == 3) {
            return true; // slant 2: cells 2,4,6
        }
        return false;
    };
    //-------Cell-----------------------
    Logic.prototype.isCellTaken = function (num, board) {
        var cellStr = this.getCellContent(board.boardArray[num]);
        if (cellStr == "X" || cellStr == "O") {
            return true;
        }
        return false;
    };
    Logic.prototype.getCellContent = function (cell) {
        switch (cell) {
            case Cell.One: return "1";
            case Cell.Two: return "2";
            case Cell.Three: return "3";
            case Cell.Four: return "4";
            case Cell.Five: return "5";
            case Cell.Six: return "6";
            case Cell.Seven: return "7";
            case Cell.Eight: return "8";
            case Cell.Nine: return "9";
            case Cell.X: return "X";
            case Cell.O: return "O";
        }
    };
    //-------User-----------------------
    Logic.prototype.isUserWinner = function (board, logic) {
        if (logic.isRowFullOfGivenChar(board, logic, "X")) {
            return true;
        }
        if (logic.isColumnFullOfGivenChar(board, logic, "X")) {
            return true;
        }
        if (logic.isSlantFullOfGivenChar(board, logic, "X")) {
            return true;
        }
        return false;
    };
    Logic.prototype.isUserKeletWrong1to9 = function (num) {
        if (num != 1 && num != 2 && num != 3 && num != 4 && num != 5 && num != 6 && num != 7 && num != 8 && num != 9) {
            return true;
        }
        return false;
    };
    Logic.prototype.isUserKeletNaN = function (num) {
        if (isNaN(num)) {
            return true;
        }
        return false;
    };
    //-------Computer-------------
    Logic.prototype.isComputerWinner = function (board, logic) {
        if (logic.isRowFullOfGivenChar(board, logic, "O")) {
            return true;
        }
        if (logic.isColumnFullOfGivenChar(board, logic, "O")) {
            return true;
        }
        if (logic.isSlantFullOfGivenChar(board, logic, "O")) {
            return true;
        }
        return false;
    };
    return Logic;
}());
//# sourceMappingURL=Logic.js.map