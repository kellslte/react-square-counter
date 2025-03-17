import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-50 mx-auto text-center d-flex flex-column justify-content-center align-items-center text-white">
      <h1>Square Counter</h1>
      <p>
        The square of the number of times you hahve clicked the button is{" "}
        {count * count}
      </p>
      <button
        className="btn  btn-primary"
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setCount((count) => count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
