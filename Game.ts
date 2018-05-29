class Game {

    private gui: GUI = new GUI();
    private logic: Logic = new Logic();
    private board: Board = new Board();
    private user: User = new User();
    private computer: Computer = new Computer();

    public start(): void {
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

    }
    
}