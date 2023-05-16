import Board from "./components/Board";
import { EmptyCell } from "./types/types";
import { useTetris } from "./hooks/useTetris";

function App() {
  const { board, startGame, isPlaying } = useTetris();

  return (
    <div className="App">
      <h1>Tetris</h1>
      <Board currentBoard={board} />
    </div>
  );
}

export default App;
