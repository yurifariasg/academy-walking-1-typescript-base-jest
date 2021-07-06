export class TicTacToe {
    constructor(
        private board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ],
        private isPlayerX = true
    ) {
    }

    play(position: Position) {

        let positionX = Number(position.charAt(0));
        let positionY = Number(position.charAt(2));
        if (this.board[positionX][positionY]) {
            throw new Error("Position Taken");
        }
        this.board[positionX][positionY] = this.isPlayerX
            ? "X"
            : "O";
        this.isPlayerX = !this.isPlayerX;
    }

    printGrid(): string {
        let printedBoard = "";

        this.board.forEach((row) => {
            printedBoard += "|";
            row.forEach((position) => {
                printedBoard += `${position}|`;
            });

            printedBoard += "\n";
        });

        return printedBoard;
    }
}

export enum Position {
    TopLeft = "0,0",
    TopMiddle = "0,1",
    TopRight = "0,2",
    MiddleLeft = "1,0",
    Centre = "1,1",
    MiddleRight = "1,2",
    BottomLeft = "2,0",
    BottomMiddle = "2,1",
    BottomRight = "2,2",
}
