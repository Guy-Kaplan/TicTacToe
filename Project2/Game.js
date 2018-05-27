var Game = /** @class */ (function () {
    function Game() {
        this.gui = new GUI();
        this.logic = new Logic();
        this.board = new Board();
        this.user = new User();
        this.computer = new Computer();
    }
    Game.prototype.start = function () {
        this.board.initBoardArray();
        this.gui.displayWelcomeMsg();
        while (true) {
            this.user.playMove(this.board, this.logic, this.gui);
            this.gui.displayBoardInAlert(this.board, this.logic);
            if (this.logic.isGameOver(this.board, this.logic)) {
                break;
            }
            this.computer.playMove(this.board, this.logic, this.gui);
            this.gui.displayBoardInAlert(this.board, this.logic);
            if (this.logic.isGameOver(this.board, this.logic)) {
                break;
            }
        }
        if (this.logic.isUserWinner(this.board, this.logic)) {
            this.gui.displayUserWinsMsg();
        }
        else if (this.logic.isComputerWinner(this.board, this.logic)) {
            this.gui.displayComputerWinsMsg();
        }
        else {
            this.gui.displayDrawMsg();
        }
        this.gui.displayBoard(this.board, this.logic);
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map