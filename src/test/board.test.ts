import { Board, BoardPosition, BoardSymbol, BoardPlayer } from "../main/board";

describe("tic tac toe first move", () => {
  it("should place an X on top left after Player 1 plays", () => {
    let board: Board = new Board();
    board.play(BoardPosition.TOP_LEFT);
    expect(board.atPosition(BoardPosition.TOP_LEFT)).toBe(BoardSymbol.X);
  });
  it("should place an O on bottom left after Player 2 plays", () => {
    let board: Board = new Board();
    board.play(BoardPosition.TOP_LEFT);
    board.play(BoardPosition.BOTTOM_LEFT);
    expect(board.atPosition(BoardPosition.BOTTOM_LEFT)).toBe(BoardSymbol.O);
  });

  it("should place an X on bottom left after Player 1 plays", () => {
    let board: Board = new Board();
    board.play(BoardPosition.BOTTOM_LEFT);
    expect(board.atPosition(BoardPosition.BOTTOM_LEFT)).toBe(BoardSymbol.X);
  });

  it("should throw an error when a player plays on a taken position", () => {
    expect.assertions(1);
    let board: Board = new Board();
    board.play(BoardPosition.BOTTOM_LEFT);
    try {
      board.play(BoardPosition.BOTTOM_LEFT);
    } catch (error) {
      expect(error.message).toBe("Already taken");
    }
  });
});

describe("Winning Scenario", () => {
  it("should tell that player 1 won if it has 3 horizontal symbols", () => {
    let board: Board = new Board();
    board.play(BoardPosition.TOP_LEFT);
    board.play(BoardPosition.BOTTOM_LEFT);
    board.play(BoardPosition.TOP_CENTER);
    board.play(BoardPosition.CENTER);
    board.play(BoardPosition.TOP_RIGHT);

    expect(board.checkWinner()).toBe(BoardPlayer.PlayerOne);
  });
});
