import WINER_CASES from "../constant/combosWiner";
export const checkWiner = (board) => {
  //recibimos el tablero para comparar...
  //board -> Array(9) [ "X", "X", "X", "O", "O", null, null, null, null ]
  for (const cases of WINER_CASES) {
    const [a, b, c] = cases;

    if (board[a] === board[b] && board[b] === board[c]) {
      const playerWiner = board[a];

      if (playerWiner != null) {
        return playerWiner;
      }
    }
  }

  //comprobamos si el board esta lleno para detectar el fin del gjuego
  const empate = board.filter((cuadro) => cuadro === null);

  if (empate.length === 0) {
    // console.log("cambie a false el ganador");
    return false;
  }
};
