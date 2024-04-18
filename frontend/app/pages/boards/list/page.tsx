"use client";

import CardButton from "@/app/atoms/button/CardButton";
import MoveButton from "@/app/atoms/button/MoveButton";
import { findAllBoards } from "@/app/components/board/service/board.service";
import { getAllBoards } from "@/app/components/board/service/board.slice";
import { PG } from "@/app/components/common/enums/PG";
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
        <div>
          <MoveButton title={"게시글 작성"} path={`${PG.ARTICLE}/save`} />
          <div className="flex flex-row gap-3 w-screen items-center">
            {allBoards.map((board: any) => (
              <CardButton
                id={board.id}
                title={board.title}
                description={board.description}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
