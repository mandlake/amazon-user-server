"use client";

import CardButton from "@/app/atoms/button/CardButton";
import MoveButton from "@/app/atoms/button/MoveButton";
import { findAllBoards } from "@/app/components/board/service/board.service";
import { getAllBoards } from "@/app/components/board/service/board.slice";
import { PG } from "@/app/components/common/enums/PG";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const BoardCard = () => {
  const dispatch = useDispatch();
  const allBoards = useSelector(getAllBoards);

  useEffect(() => {
    dispatch(findAllBoards(1)).then((res: any) => {
      console.log(res.payload);
    });
  }, []);

  return (
    <>
      {allBoards !== undefined ? (
        <div className="flex flex-col items-start m-5">
          <h1 className="m-3 text-slate-900">게시판 목록</h1>
          <div className="flex flex-row gap-3 w-screen items-center m-3">
            {allBoards.map((board: any) => (
              <CardButton
                key={board.id}
                id={board.id}
                title={board.title}
                description={board.description}
              />
            ))}
          </div>
          <div className="m-3">
            <MoveButton title={"게시글 작성"} path={`${PG.ARTICLE}/save`} />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default BoardCard;
