import PropTypes from "prop-types";

const WinerModal = ({ winer, resetGame }) => {
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

// Validación de tipos de las props
WinerModal.propTypes = {
  winer: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  resetGame: PropTypes.func.isRequired,
};

export default WinerModal;
