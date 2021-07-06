import { Position, TicTacToe } from "../main/example";

describe("Tic Tac Toe", () => {
  it("should initialise the board", () => {
    const tictactoe = new TicTacToe();
    expect(tictactoe.printGrid()).toBe("||||\n||||\n||||\n");
  });
  it.each([
    [Position.TopLeft, "|X|||\n||||\n||||\n"],
    [Position.TopMiddle, "||X||\n||||\n||||\n"],
    [Position.TopRight, "|||X|\n||||\n||||\n"],
    [Position.MiddleLeft, "||||\n|X|||\n||||\n"],
    [Position.Centre, "||||\n||X||\n||||\n"],
    [Position.MiddleRight, "||||\n|||X|\n||||\n"],
    [Position.BottomLeft, "||||\n||||\n|X|||\n"],
    [Position.BottomMiddle, "||||\n||||\n||X||\n"],
    [Position.BottomRight, "||||\n||||\n|||X|\n"],
  ])(
    "X plays first in %s to result in board matching \n%s",
    (position: Position, expectedBoard: string) => {
      const tictactoe = new TicTacToe();
      tictactoe.play(position);
      expect(tictactoe.printGrid()).toBe(expectedBoard);
    }
  );

  it("should place the right piece on the second turn", () => {
    const tictactoe = new TicTacToe();
    tictactoe.play(Position.TopLeft);
    tictactoe.play(Position.TopMiddle);
    expect(tictactoe.printGrid()).toBe("|X|O||\n||||\n||||\n");
  });

  it("should place the right piece on the second turn", () => {
    const tictactoe = new TicTacToe();
    tictactoe.play(Position.TopLeft);
    tictactoe.play(Position.TopMiddle);
    tictactoe.play(Position.TopRight);
    expect(tictactoe.printGrid()).toBe("|X|O|X|\n||||\n||||\n");
  });

  it("player cannot place a piece on an occupied grid", () => {
    const tictactoe = new TicTacToe();
    tictactoe.play(Position.TopLeft);
    expect(() => tictactoe.play(Position.TopLeft)).toThrow(
      new Error("Position Taken")
    );
  });
});
