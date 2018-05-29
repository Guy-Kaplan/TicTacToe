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
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.playMove = function (board, logic, gui) {
        var userChoiseNum = gui.getUserMoveNum();
        var isKeletFullyTakin = 1; // 0-true ; 1-false
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
    };
    return User;
}(Player));
//# sourceMappingURL=User.js.map