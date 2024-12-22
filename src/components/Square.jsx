import PropTypes from "prop-types";

export const Square = ({
  children,
  index,
  isSelected,
  updateBoard
}) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  //manejador de eventos
  const handeleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handeleClick} className={className}>
      {children}
    </div>
  );
};
// Validación de tipos de las props
Square.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func,
};