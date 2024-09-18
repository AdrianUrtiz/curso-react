/* eslint-disable react/prop-types */
function Counter({ numClicks }) {
  return (
    <div className="size-40 border-2 text-8xl flex justify-center items-center ">
      {numClicks}
    </div>
  );
}

export default Counter;
