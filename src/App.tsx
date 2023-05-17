import Board from "./components/Board";
import UpcomingBlocks from "./components/UpcomingBlocks";
import { useTetris } from "./hooks/useTetris";

function App() {
  const { score, board, startGame, isPlaying, upcomingBlocks } = useTetris();

  return (
    <div className="app">
      <h1>TETRIS</h1>
      <Board currentBoard={board} />
      <div className="controls">
        {isPlaying ? (
          <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        ) : (
          <button className="button-start" onClick={startGame}>
            <p className="start">START</p>
          </button>
        )}
      </div>
      <div className="score-card">
        <h2>Score: {score}</h2>
      </div>
    </div>
  );
}

export default App;
