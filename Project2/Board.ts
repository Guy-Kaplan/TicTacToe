class Board {

    public static readonly boardSize: number = 9;
    public boardArray: Cell[] = new Array<Cell>(Board.boardSize);
    

    public initBoardArray(): void {
        this.boardArray[0] = Cell.One;
        this.boardArray[1] = Cell.Two;
        this.boardArray[2] = Cell.Three;
        this.boardArray[3] = Cell.Four;
        this.boardArray[4] = Cell.Five;
        this.boardArray[5] = Cell.Six;
        this.boardArray[6] = Cell.Seven;
        this.boardArray[7] = Cell.Eight;
        this.boardArray[8] = Cell.Nine;

    }

    

}
