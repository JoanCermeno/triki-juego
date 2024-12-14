export const Square = ({
  children,
  updateSquare,
  index,
  isSelected,
  updateBoard,
  setTurno,
  setBoard,
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
