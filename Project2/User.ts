class User extends Player { // User is a human player


    public playMove(board: Board, logic: Logic, gui: GUI): void {
        let userChoiseNum: number = gui.getUserMoveNum();
        let isKeletFullyTakin: number = 1; // 0-true ; 1-false
        while (isKeletFullyTakin == 1) {
            if (logic.isUserKeletNaN(userChoiseNum)) {
                gui.displayErrorUserKeletNaN();
                userChoiseNum = gui.getUserMoveNum();
                continue;
            }
            if (logic.isUserKeletWrong1to9(userChoiseNum)) {
                gui.displayErrorUserKelet1to9();
                userChoiseNum = gui.getUserMoveNum();
                continue;
            }
            if (logic.isCellTaken(userChoiseNum - 1, board)) {
                gui.displayErrorCellTaken(userChoiseNum - 1);
                userChoiseNum = gui.getUserMoveNum();
                continue;
            }
            isKeletFullyTakin = 0;
        }
        // Now for sure: user kelet is TAKIN and the cell is FREE
        board.boardArray[userChoiseNum - 1] = Cell.X;
    }


}







