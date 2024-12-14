import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import TURNOS from "./constant/turnos";
import { checkWiner } from "./util/checkWiner";
import WinerModal from "./components/WinerModal";
import { Square } from "./components/Square";
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  //estado para saber cual jugador inica el juego
  const [turno, setTurno] = useState(TURNOS.X);
  //declarando el estado del ganador del juego
  const [winer, setWiner] = useState(null);

  // funcion update board.
  const updateBoard = (index) => {
    // primero si el cuadro en donde queremos pintar tiene algo, no hacemos nada
    if (board[index] != null || winer) return;

    //calculamos el cambio de turno
    const newTurn = turno === TURNOS.X ? TURNOS.O : TURNOS.X;
    setTurno(newTurn);

    //ahora pintamos el cuadro al que se le dio click
    const newBoard = [...board];

    newBoard[index] = turno;
    console.log(newBoard);
    setBoard(newBoard);
    //checamos haber si hay un ganador
    let newWiner = checkWiner(newBoard);

    if (newWiner) {
      confetti();
      setWiner(newWiner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurno("X");
    setWiner(null);
  };

  return (
    <>
      <main className="board">
        <h1>Juego del triki version venezolano</h1>
        <button
          className="board button"
          onClick={() => resetGame(setBoard, setTurno, setWiner)}
        >
          Resetear el juego
        </button>
        <section className="game">
          {board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {_}
              </Square>
            );
          })}
        </section>
        {/* tabla para ver el turno del jugador */}
        <section className="turn">
          <Square isSelected={turno === TURNOS.X}> {TURNOS.X} </Square>
          <Square isSelected={turno === TURNOS.O}> {TURNOS.O} </Square>
        </section>
        {/* modal para ver si el jugador ha ganado */}
        <WinerModal winer={winer} resetGame={resetGame} />
      </main>
    </>
  );
}

export default App;
