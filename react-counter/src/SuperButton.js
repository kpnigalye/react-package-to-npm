import React, { useState } from "react";

const SuperButton = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 2);
  const decrease = () => setCount((prev) => prev - 2);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default SuperButton;
