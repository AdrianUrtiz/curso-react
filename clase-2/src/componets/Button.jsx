/* eslint-disable react/prop-types */
function Button({ text, handleClick }) {
  return (
    <button className="h-10 w-40 bg-red-400 rounded-md" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
