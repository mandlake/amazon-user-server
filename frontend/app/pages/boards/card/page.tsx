"use client";

import CardButton from "@/app/atoms/button/CardButton";
import { findAllBoards } from "@/app/components/board/service/board.service";
import { getAllBoards } from "@/app/components/board/service/board.slice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function BoardCard() {
  const dispatch = useDispatch();
  const allBoards = useSelector(getAllBoards);

  useEffect(() => {
    dispatch(findAllBoards(1));
  }, []);

  return (
    <>
      {allBoards !== undefined ? (
        <div className="flex flex-row gap-3 w-screen items-center">
          {allBoards.map((board: any) => (
            <CardButton
              id={board.id}
              title={board.title}
              description={board.description}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
