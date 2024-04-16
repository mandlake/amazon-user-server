"use client";

import { Button } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const clickPlus = () => {
    setCount(count + 1);
  };

  const clickMinus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10 text-blue-950 text-lg">
        <h1 className="font-semibold">Counter : {count}</h1>
        <div className="flex gap-4 mt-3 text-black">
          <Button
            className="margin-2 border-black bg-slate-100 w-9 h-9"
            onClick={clickPlus}
          >
            +
          </Button>
          <Button
            className="border-2 border-black bg-slate-100 w-9 h-9"
            onClick={clickMinus}
          >
            -
          </Button>
        </div>
      </div>
    </>
  );
};

export default Counter;
