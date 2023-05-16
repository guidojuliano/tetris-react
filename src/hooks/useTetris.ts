import { useState, useCallback, useEffect } from "react";
import { useTetrisBoard } from "./useTetrisBoard";
import { BoardShape } from "../types/types";

enum TickSpeed {
  Normal = 800,
}

export function useTetris() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tickSpeed, setTickSpeed] = useState<TickSpeed | null>(null);
  const [
    { board, droppingRow, droppingColumn, droppingBlock, droppingShape },
    dispatchBoardState,
  ] = useTetrisBoard();

  const startGame = useCallback(() => {
    setIsPlaying(true);
    setTickSpeed(TickSpeed.Normal);
    dispatchBoardState({ type: "start" });
  }, [dispatchBoardState]);

  const renderedBoard = structuredClone(board) as BoardShape;
  if (isPlaying) {
    droppingShape
      .filter((row) => row.some((isSet) => isSet))
      .forEach((row: boolean[], rowIndex: number) => {
        row.forEach((isSet: boolean, colIndex: number) => {
          if (isSet) {
            renderedBoard[droppingRow + rowIndex][droppingColumn + colIndex] =
              droppingBlock;
          }
        });
      });
  }

  return {
    board: renderedBoard,
    startGame,
    isPlaying,
  };
}