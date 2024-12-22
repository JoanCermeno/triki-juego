import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import TURNOS from "./constant/turnos";
import { checkWiner } from "./util/checkWiner";
import WinerModal from "./components/WinerModal";
import { Square } from "./components/Square";

function App() {
  useEffect(() => {
    console.log("useEffect");
  });

  //leemos el local storage para saber el estado del turno y del board
  const [board, setBoard] = useState(() => {
    const board = localStorage.getItem("board");
    return board ? JSON.parse(board) : Array(9).fill(null);
  });
  const [turno, setTurno] = useState(() => {
    const turno = localStorage.getItem("turno");
    return turno ? turno : TURNOS.X;
  });
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
    setBoard(newBoard);
    //guardarmos los estados del turno y el board en el local storage
    localStorage.setItem("turno", newTurn);
    localStorage.setItem("board", JSON.stringify(newBoard));

    //checamos haber si hay un ganador
    let newWiner = checkWiner(newBoard);

    if (newWiner) {
      confetti();
      setWiner(newWiner);
    }
    if (newWiner === false) {
      setWiner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurno(TURNOS.X);
    setWiner(null);
    localStorage.clear();
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
