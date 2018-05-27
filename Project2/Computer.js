var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    function Computer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //------isAbleToWin---------------------------------------------------
    Computer.prototype.getRowThatContainsTwoOsAndAnEmptyCell = function (board, logic) {
        // If so: returns the row number (1/2/3)
        // If not: returns (-1)
        var counterOfOs = 0;
        var i;
        for (i = 0; i <= 2; i++) {
            if (logic.getCellContent(board.boardArray[i]) == "O") {
                counterOfOs++;
            }
        }
        if (counterOfOs == 2 && logic.getCellContent(board.boardArray[0]) != "X" && logic.getCellContent(board.boardArray[1]) != "X" && logic.getCellContent(board.boardArray[2]) != "X") {
            return 1; // row 1: cells 0,1,2
        }
        counterOfOs = 0;
        for (i = 3; i <= 5; i++) {
            if (logic.getCellContent(board.boardArray[i]) == "O") {
                counterOfOs++;
            }
        }
        if (counterOfOs == 2 && logic.getCellContent(board.boardArray[3]) != "X" && logic.getCellContent(board.boardArray[4]) != "X" && logic.getCellContent(board.boardArray[5]) != "X") {
            return 2; // row 2: cells 3,4,5
        }
        counterOfOs = 0;
        for (i = 6; i <= 8; i++) {
            if (logic.getCellContent(board.boardArray[i]) == "O") {
                counterOfOs++;
            }
        }
        if (counterOfOs == 2 && logic.getCellContent(board.boardArray[6]) != "X" && logic.getCellContent(board.boardArray[7]) != "X" && logic.getCellContent(board.boardArray[8]) != "X") {
            return 3; // row 3: cells 6,7,8
        }
        return (-1);
    };
    Computer.prototype.getRowsEmptyCellToPutInAndWin = function (rowNum, board, logic) {
        var i;
        if (rowNum == 1) {
            for (i = 0; i <= 2; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
        if (rowNum == 2) {
            for (i = 3; i <= 5; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
        if (rowNum == 3) {
            for (i = 6; i <= 8; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
    };
    Computer.prototype.getColumnThatContainsTwoOsAndAnEmptyCell = function (board, logic) {
        // If so: returns the column number (1/2/3)
        // If not: returns (-1)
        var counterOfOs = 0;
        var i;
        for (i = 0; i <= 6; i += 3) {
            if (logic.getCellContent(board.boardArray[i]) == "O") {
                counterOfOs++;
            }
        }
        if (counterOfOs == 2 && logic.getCellContent(board.boardArray[0]) != "X" && logic.getCellContent(board.boardArray[3]) != "X" && logic.getCellContent(board.boardArray[6]) != "X") {
            return 1; // column 1: cells 0,3,6
        }
        counterOfOs = 0;
        for (i = 1; i <= 7; i += 3) {
            if (logic.getCellContent(board.boardArray[i]) == "O") {
                counterOfOs++;
            }
        }
        if (counterOfOs == 2 && logic.getCellContent(board.boardArray[1]) != "X" && logic.getCellContent(board.boardArray[4]) != "X" && logic.getCellContent(board.boardArray[7]) != "X") {
            return 2; // column 2: cells 1,4,7
        }
        counterOfOs = 0;
        for (i = 2; i <= 8; i += 3) {
            if (logic.getCellContent(board.boardArray[i]) == "O") {
                counterOfOs++;
            }
        }
        if (counterOfOs == 2 && logic.getCellContent(board.boardArray[2]) != "X" && logic.getCellContent(board.boardArray[5]) != "X" && logic.getCellContent(board.boardArray[8]) != "X") {
            return 3; // column 3: cells 2,5,8
        }
        return (-1);
    };
    Computer.prototype.getColumnsEmptyCellToPutInAndWin = function (columnNum, board, logic) {
        var i;
        if (columnNum == 1) {
            for (i = 0; i <= 6; i += 3) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
        if (columnNum == 2) {
            for (i = 1; i <= 7; i += 3) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
        if (columnNum == 3) {
            for (i = 2; i <= 8; i += 3) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
    };
    Computer.prototype.getSlantThatContainsTwoOsAndAnEmptyCell = function (board, logic) {
        // If so: returns the slant number (1/2)
        // If not: returns (-1)
        var counterOfOs = 0;
        var i;
        for (i = 0; i <= 8; i += 4) {
            if (logic.getCellContent(board.boardArray[i]) == "O") {
                counterOfOs++;
            }
        }
        if (counterOfOs == 2 && logic.getCellContent(board.boardArray[0]) != "X" && logic.getCellContent(board.boardArray[4]) != "X" && logic.getCellContent(board.boardArray[8]) != "X") {
            return 1; // slant 1: cells 0,4,8
        }
        counterOfOs = 0;
        for (i = 2; i <= 6; i += 2) {
            if (logic.getCellContent(board.boardArray[i]) == "O") {
                counterOfOs++;
            }
        }
        if (counterOfOs == 2 && logic.getCellContent(board.boardArray[2]) != "X" && logic.getCellContent(board.boardArray[4]) != "X" && logic.getCellContent(board.boardArray[6]) != "X") {
            return 2; // slant 2: cells 2,4,6
        }
        return (-1);
    };
    Computer.prototype.getSlantsEmptyCellToPutInAndWin = function (slantNum, board, logic) {
        var i;
        if (slantNum == 1) {
            for (i = 0; i <= 8; i += 4) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
        if (slantNum == 2) {
            for (i = 2; i <= 6; i += 2) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
    };
    Computer.prototype.isAbleToWin = function (board, logic) {
        if (this.getRowThatContainsTwoOsAndAnEmptyCell(board, logic) != (-1)) {
            return true;
        }
        if (this.getColumnThatContainsTwoOsAndAnEmptyCell(board, logic) != (-1)) {
            return true;
        }
        if (this.getSlantThatContainsTwoOsAndAnEmptyCell(board, logic) != (-1)) {
            return true;
        }
        return false;
    };
    Computer.prototype.getWhereAbleToWin = function (board, logic) {
        // returns the cell location in the array - where to put and WIN
        var location;
        var row = this.getRowThatContainsTwoOsAndAnEmptyCell(board, logic);
        var column = this.getColumnThatContainsTwoOsAndAnEmptyCell(board, logic);
        var slant = this.getSlantThatContainsTwoOsAndAnEmptyCell(board, logic);
        if (row != (-1)) {
            location = this.getRowsEmptyCellToPutInAndWin(row, board, logic);
            return location;
        }
        if (column != (-1)) {
            location = this.getColumnsEmptyCellToPutInAndWin(column, board, logic);
            return location;
        }
        if (slant != (-1)) {
            location = this.getSlantsEmptyCellToPutInAndWin(slant, board, logic);
            return location;
        }
    };
    //------isAbleToBlock---------------------------------------------------
    // checks if there are 2 Xs and an empty cell in a row/column/slant 
    Computer.prototype.getRowForBlockingTheUser = function (board, logic) {
        // If so: returns the row number (1/2/3)
        // If not: returns(-1)
        var counterOfXs = 0;
        var i;
        for (i = 0; i <= 2; i++) {
            if (logic.getCellContent(board.boardArray[i]) == "X") {
                counterOfXs++;
            }
        }
        if (counterOfXs == 2 && logic.getCellContent(board.boardArray[0]) != "O" && logic.getCellContent(board.boardArray[1]) != "O" && logic.getCellContent(board.boardArray[2]) != "O") {
            return 1; // row 1: cells 0,1,2
        }
        counterOfXs = 0;
        for (i = 3; i <= 5; i++) {
            if (logic.getCellContent(board.boardArray[i]) == "X") {
                counterOfXs++;
            }
        }
        if (counterOfXs == 2 && logic.getCellContent(board.boardArray[3]) != "O" && logic.getCellContent(board.boardArray[4]) != "O" && logic.getCellContent(board.boardArray[5]) != "O") {
            return 2; // row 2: cells 3,4,5
        }
        counterOfXs = 0;
        for (i = 6; i <= 8; i++) {
            if (logic.getCellContent(board.boardArray[i]) == "X") {
                counterOfXs++;
            }
        }
        if (counterOfXs == 2 && logic.getCellContent(board.boardArray[6]) != "O" && logic.getCellContent(board.boardArray[7]) != "O" && logic.getCellContent(board.boardArray[8]) != "O") {
            return 3; // row 3: cells 6,7,8
        }
        return (-1);
    };
    Computer.prototype.getRowsEmptyCellToBlockTheUser = function (rowNum, board, logic) {
        // gets the empty cell from the given row
        var i;
        if (rowNum == 1) {
            for (i = 0; i <= 2; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
        if (rowNum == 2) {
            for (i = 3; i <= 5; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
        if (rowNum == 3) {
            for (i = 6; i <= 8; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
    };
    Computer.prototype.getColumnForBlockingTheUser = function (board, logic) {
        // If so: returns the column number (1/2/3)
        // If not: returns(-1)
        var counterOfXs = 0;
        var i;
        for (i = 0; i <= 6; i += 3) {
            if (logic.getCellContent(board.boardArray[i]) == "X") {
                counterOfXs++;
            }
        }
        if (counterOfXs == 2 && logic.getCellContent(board.boardArray[0]) != "O" && logic.getCellContent(board.boardArray[3]) != "O" && logic.getCellContent(board.boardArray[6]) != "O") {
            return 1; // column 1: cells 0,3,6
        }
        counterOfXs = 0;
        for (i = 1; i <= 7; i += 3) {
            if (logic.getCellContent(board.boardArray[i]) == "X") {
                counterOfXs++;
            }
        }
        if (counterOfXs == 2 && logic.getCellContent(board.boardArray[1]) != "O" && logic.getCellContent(board.boardArray[4]) != "O" && logic.getCellContent(board.boardArray[7]) != "O") {
            return 2; // column 2: cells 1,4,7
        }
        counterOfXs = 0;
        for (i = 2; i <= 8; i += 3) {
            if (logic.getCellContent(board.boardArray[i]) == "X") {
                counterOfXs++;
            }
        }
        if (counterOfXs == 2 && logic.getCellContent(board.boardArray[2]) != "O" && logic.getCellContent(board.boardArray[5]) != "O" && logic.getCellContent(board.boardArray[8]) != "O") {
            return 3; // column 3: cells 2,5,8
        }
        return (-1);
    };
    Computer.prototype.getColumnsEmptyCellToBlockTheUser = function (columnNum, board, logic) {
        // gets the empty cell from the given column
        var i;
        if (columnNum == 1) {
            for (i = 0; i <= 6; i += 3) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
        if (columnNum == 2) {
            for (i = 1; i <= 7; i += 3) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
        if (columnNum == 3) {
            for (i = 2; i <= 8; i += 3) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
    };
    Computer.prototype.getSlantForBlockingTheUser = function (board, logic) {
        // If so: returns the slant number (1/2)
        // If not: returns(-1)
        var counterOfXs = 0;
        var i;
        for (i = 0; i <= 8; i += 4) {
            if (logic.getCellContent(board.boardArray[i]) == "X") {
                counterOfXs++;
            }
        }
        if (counterOfXs == 2 && logic.getCellContent(board.boardArray[0]) != "O" && logic.getCellContent(board.boardArray[4]) != "O" && logic.getCellContent(board.boardArray[8]) != "O") {
            return 1; // slant 1: cells 0,4,8
        }
        counterOfXs = 0;
        for (i = 2; i <= 6; i += 2) {
            if (logic.getCellContent(board.boardArray[i]) == "X") {
                counterOfXs++;
            }
        }
        if (counterOfXs == 2 && logic.getCellContent(board.boardArray[2]) != "O" && logic.getCellContent(board.boardArray[4]) != "O" && logic.getCellContent(board.boardArray[6]) != "O") {
            return 2; // slant 2: cells 2,4,6
        }
        return (-1);
    };
    Computer.prototype.getSlantsEmptyCellToBlockTheUser = function (slantNum, board, logic) {
        // gets the empty cell from the given slant
        var i;
        if (slantNum == 1) {
            for (i = 0; i <= 8; i += 4) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
        if (slantNum == 2) {
            for (i = 2; i <= 6; i += 2) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
    };
    Computer.prototype.isAbleToBlock = function (board, logic) {
        if (this.getRowForBlockingTheUser(board, logic) != (-1)) {
            return true;
        }
        if (this.getColumnForBlockingTheUser(board, logic) != (-1)) {
            return true;
        }
        if (this.getSlantForBlockingTheUser(board, logic) != (-1)) {
            return true;
        }
        return false;
    };
    Computer.prototype.getWhereAbleToBlock = function (board, logic) {
        // returns the cell location in the array - where to block
        var location;
        var row = this.getRowForBlockingTheUser(board, logic);
        var column = this.getColumnForBlockingTheUser(board, logic);
        var slant = this.getSlantForBlockingTheUser(board, logic);
        if (row != (-1)) {
            location = this.getRowsEmptyCellToBlockTheUser(row, board, logic);
            return location;
        }
        if (column != (-1)) {
            location = this.getColumnsEmptyCellToBlockTheUser(column, board, logic);
            return location;
        }
        if (slant != (-1)) {
            location = this.getSlantsEmptyCellToBlockTheUser(slant, board, logic);
            return location;
        }
    };
    //----------------------------------------------------------------------
    Computer.prototype.playMove = function (board, logic, gui) {
        var targetCell;
        if (this.isAbleToWin(board, logic)) {
            targetCell = this.getWhereAbleToWin(board, logic);
            board.boardArray[targetCell] = Cell.O;
            gui.displayComputerWinMoveMsg(targetCell);
        }
        else if (this.isAbleToBlock(board, logic)) {
            targetCell = this.getWhereAbleToBlock(board, logic);
            board.boardArray[targetCell] = Cell.O;
            gui.displayComputerBlocksMsg(targetCell);
        }
        else {
            var randomEmptyCell = void 0;
            do {
                randomEmptyCell = logic.getRandomNumberBetweenMinAndMax(1, 9);
            } while (logic.isCellTaken(randomEmptyCell - 1, board));
            board.boardArray[randomEmptyCell - 1] = Cell.O;
            gui.displayComputerPutsMsg(randomEmptyCell);
        }
    };
    return Computer;
}(Player));
//# sourceMappingURL=Computer.js.map