class Computer extends Player { // Computer is an AI player


    //------isAbleToWin---------------------------------------------------
    public getRowThatContainsTwoOsAndAnEmptyCell(board: Board, logic: Logic): number {
        // If so: returns the row number (1/2/3)
        // If not: returns (-1)
        let counterOfOs: number = 0;
        let i: number;
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
    }

    public getRowsEmptyCellToPutInAndWin(rowNum: number, board: Board, logic: Logic): number {
        let i: number;
        if (rowNum == 1) {// row 1: cells 0,1,2
            for (i = 0; i <= 2; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
        if (rowNum == 2) {// row 2: cells 3,4,5
            for (i = 3; i <= 5; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
        if (rowNum == 3) {// row 3: cells 6,7,8
            for (i = 6; i <= 8; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
    }

    public getColumnThatContainsTwoOsAndAnEmptyCell(board: Board, logic: Logic): number {
        // If so: returns the column number (1/2/3)
        // If not: returns (-1)
        let counterOfOs: number = 0;
        let i: number;
        for (i = 0; i <= 6; i+=3) {
            if (logic.getCellContent(board.boardArray[i]) == "O") {
                counterOfOs++;
            }
        }
        if (counterOfOs == 2 && logic.getCellContent(board.boardArray[0]) != "X" && logic.getCellContent(board.boardArray[3]) != "X" && logic.getCellContent(board.boardArray[6]) != "X") {
            return 1; // column 1: cells 0,3,6
        }
        counterOfOs = 0;
        for (i = 1; i <= 7; i+=3) {
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
    }

    public getColumnsEmptyCellToPutInAndWin(columnNum: number, board: Board, logic: Logic): number {
        let i: number;
        if (columnNum == 1) {// column 1: cells 0,3,6
            for (i = 0; i <= 6; i += 3) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
        if (columnNum == 2) {// column 2: cells 1,4,7
            for (i = 1; i <= 7; i += 3) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
        if (columnNum == 3) {// column 3: cells 2,5,8
            for (i = 2; i <= 8; i+=3) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
    }

    public getSlantThatContainsTwoOsAndAnEmptyCell(board: Board, logic: Logic): number {
        // If so: returns the slant number (1/2)
        // If not: returns (-1)
        let counterOfOs: number = 0;
        let i: number;
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
    }

    public getSlantsEmptyCellToPutInAndWin(slantNum: number, board: Board, logic: Logic): number {
        let i: number;
        if (slantNum == 1) {// slant 1: cells 0,4,8
            for (i = 0; i <= 8; i += 4) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
        if (slantNum == 2) {// slant 2: cells 2,4,6
            for (i = 2; i <= 6; i += 2) {
                if (logic.getCellContent(board.boardArray[i]) != "O") {
                    return i;
                }
            }
        }
    }

    public isAbleToWin(board: Board, logic: Logic): boolean {
        if (this.getRowThatContainsTwoOsAndAnEmptyCell(board,logic) != (-1)) {
            return true;
        }
        if (this.getColumnThatContainsTwoOsAndAnEmptyCell(board, logic) != (-1)) {
            return true;
        }
        if (this.getSlantThatContainsTwoOsAndAnEmptyCell(board, logic) != (-1)) {
            return true;
        }
        return false;
    }
    
    public getWhereAbleToWin(board: Board, logic: Logic): number { //+++++++++
        // returns the cell location in the array - where to put and WIN
        let location: number;
        let row: number = this.getRowThatContainsTwoOsAndAnEmptyCell(board, logic);
        let column: number = this.getColumnThatContainsTwoOsAndAnEmptyCell(board, logic);
        let slant: number = this.getSlantThatContainsTwoOsAndAnEmptyCell(board, logic);
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
    }

    //------isAbleToBlock---------------------------------------------------
    // checks if there are 2 Xs and an empty cell in a row/column/slant 

    public getRowForBlockingTheUser(board: Board, logic: Logic): number {
        // If so: returns the row number (1/2/3)
        // If not: returns(-1)
        let counterOfXs: number = 0;
        let i: number;
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
    }

    public getRowsEmptyCellToBlockTheUser(rowNum: number, board: Board, logic: Logic): number {
        // gets the empty cell from the given row
        let i: number;
        if (rowNum == 1) {// row 1: cells 0,1,2
            for (i = 0; i <= 2; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
        if (rowNum == 2) {// row 2: cells 3,4,5
            for (i = 3; i <= 5; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
        if (rowNum == 3) {// row 3: cells 6,7,8
            for (i = 6; i <= 8; i++) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
    }

    public getColumnForBlockingTheUser(board: Board, logic: Logic): number {
        // If so: returns the column number (1/2/3)
        // If not: returns(-1)
        let counterOfXs: number = 0;
        let i: number;
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
    }

    public getColumnsEmptyCellToBlockTheUser(columnNum: number, board: Board, logic: Logic): number {
        // gets the empty cell from the given column
        let i: number;
        if (columnNum == 1) {// column 1: cells 0,3,6
            for (i = 0; i <= 6; i += 3) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
        if (columnNum == 2) {// column 2: cells 1,4,7
            for (i = 1; i <= 7; i += 3) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
        if (columnNum == 3) {// column 3: cells 2,5,8
            for (i = 2; i <= 8; i += 3) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
    }

    public getSlantForBlockingTheUser(board: Board, logic: Logic): number {
        // If so: returns the slant number (1/2)
        // If not: returns(-1)
        let counterOfXs: number = 0;
        let i: number;
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
    }

    public getSlantsEmptyCellToBlockTheUser(slantNum: number, board: Board, logic: Logic): number {
        // gets the empty cell from the given slant
        let i: number;
        if (slantNum == 1) {// slant 1: cells 0,4,8
            for (i = 0; i <= 8; i += 4) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
        if (slantNum == 2) {// slant 2: cells 2,4,6
            for (i = 2; i <= 6; i += 2) {
                if (logic.getCellContent(board.boardArray[i]) != "X") {
                    return i;
                }
            }
        }
    }

    public isAbleToBlock(board: Board, logic: Logic): boolean {
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
    }

    public getWhereAbleToBlock(board: Board, logic: Logic): number {
        // returns the cell location in the array - where to block
        let location: number;
        let row: number = this.getRowForBlockingTheUser(board, logic);
        let column: number = this.getColumnForBlockingTheUser(board, logic);
        let slant: number = this.getSlantForBlockingTheUser(board, logic);
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
    }


    //----------------------------------------------------------------------
    public playMove(board: Board, logic: Logic, gui: GUI): void {
        let targetCell: number;
        if (this.isAbleToWin(board, logic)) { // computer plays and wins
            targetCell = this.getWhereAbleToWin(board, logic);
            board.boardArray[targetCell] = Cell.O;
            gui.displayComputerWinMoveMsg(targetCell);
        }
        else if (this.isAbleToBlock(board, logic)) { // computer blocks user
            targetCell = this.getWhereAbleToBlock(board, logic);
            board.boardArray[targetCell] = Cell.O;
            gui.displayComputerBlocksMsg(targetCell);
        }
        else { // computer puts O in a random cell
            let randomEmptyCell: number;
            do {
                randomEmptyCell = logic.getRandomNumberBetweenMinAndMax(1, 9);
            } while (logic.isCellTaken(randomEmptyCell - 1,board))
            board.boardArray[randomEmptyCell - 1] = Cell.O;
            gui.displayComputerPutsMsg(randomEmptyCell);
        }
        
    }

    

}