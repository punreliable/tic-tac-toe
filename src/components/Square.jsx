const Square = (props) => {
  function handleClick() {
    console.log("clicked!");
  }
  return (
    <button className="square" onClick={handleClick}>
      {props.value}
    </button>
  );
};

export default Square;
