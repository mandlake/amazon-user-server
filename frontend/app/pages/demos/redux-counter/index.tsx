"use client";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import {
  handlePlus,
  handleMinus,
  getCount,
} from "@/redux/features/counter-feature/counter.slice";
import Link from "next/link";

const ReduxCounter = () => {
  const count = useSelector(getCount);

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10 text-blue-950 text-lg">
        <h1 className="font-semibold">Counter : {count}</h1>
        <div className="flex gap-4 mt-3 text-black">
          <AddIcon
            className="border-2 border-black bg-slate-100 w-11 h-11"
            onClick={() => {
              dispatch(handlePlus());
            }}
          />
          <RemoveIcon
            className="border-2 border-black bg-slate-100 w-11 h-11"
            onClick={() => {
              dispatch(handleMinus());
            }}
          />
        </div>
        <br />
        <Link href={`/`}>home</Link>
      </div>
    </>
  );
};

export default ReduxCounter;
