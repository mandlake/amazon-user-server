"use client";

import ReduxCounter from "@/app/pages/demos/redux-counter";
import { NextPage } from "next";


const CounterPage: NextPage = () => {
  return (
    <>
      <ReduxCounter />
    </>
  );
};

export default CounterPage;
