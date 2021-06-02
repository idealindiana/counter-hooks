import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount({ count: +1 });
  };
  const handleDecrement = () => {
    setCount({ count: -1 });
  };
  const Reset = () => {
    let number = count;
    number = 0;
    setCount(number);
  };
  return (
    <div>
      <h5>Counter:{count}</h5>
      <button onClick={() => handleDecrement()}>Decr</button>
      <button onClick={() => handleIncrement()}>Incr</button>
      <button onClick={() => Reset()}>Rest</button>
    </div>
  );
};

export default Counter;

//display a counter with default value of 0
//create 3 buttons: increment, decrement, reset
//use useState hook to mutate the value of the counter
