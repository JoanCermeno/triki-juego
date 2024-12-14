const WinerModal = ({ winer, resetGame }) => {
  //comprobamos si el jugador ha ganado
  if (winer == null) return null;

  return (
    <section className="winner">
      <div className="text">
        <h2>{winer === false ? "Empate" : `Ha ganado ${winer}`}</h2>
        <button className="board button" onClick={resetGame}>
          Jugar de nuevo
        </button>
      </div>
    </section>
  );
};

export default WinerModal;
