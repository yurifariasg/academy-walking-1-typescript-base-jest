export enum BoardPosition {
  TOP_LEFT,
  BOTTOM_LEFT,
  TOP_CENTER,
  CENTER,
  TOP_RIGHT,
}

export enum BoardSymbol {
  X,
  O,
  EMPTY,
}

export enum BoardPlayer {
  PlayerOne,
  PlayerTwo,
}

export class Board {
  private symbolTurn: BoardSymbol = BoardSymbol.X;

  private boardState: Record<BoardPosition, BoardSymbol> = {
    [BoardPosition.TOP_LEFT]: BoardSymbol.EMPTY,
    [BoardPosition.BOTTOM_LEFT]: BoardSymbol.EMPTY,
    [BoardPosition.TOP_CENTER]: BoardSymbol.EMPTY,
    [BoardPosition.CENTER]: BoardSymbol.EMPTY,
    [BoardPosition.TOP_RIGHT]: BoardSymbol.EMPTY,
  };

  atPosition(position: BoardPosition): BoardSymbol {
    return this.boardState[position];
  }

  play(position: BoardPosition) {
    if (this.atPosition(position) === BoardSymbol.X) {
      throw new Error("Already taken");
    }
    this.boardState[position] = this.symbolTurn;
    if (this.symbolTurn == BoardSymbol.X) {
      this.symbolTurn = BoardSymbol.O;
    }
  }

  checkWinner() {
    return BoardPlayer.PlayerOne;
  }
}
