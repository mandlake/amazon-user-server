"use client";

import {
  deleteBoard,
  findBoardById,
  modifiedBoard,
} from "@/app/components/board/service/board.service";
import { getBoardById } from "@/app/components/board/service/board.slice";
import { PG } from "@/redux/common/enums/PG";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const IdPage = (props: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const board = useSelector(getBoardById);
  const [modified, setModified] = useState({
    id: board.id,
    boardName: board.boardName,
    boardType: board.boardType,
  });

  const onModified = () => {
    dispatch(
      modifiedBoard({
        ...board,
        boardName: modified.boardName || board.boardName,
        boardType: modified.boardType || board.boardType,
      })
    );
    alert("수정이 완료되었습니다.");
    router.push(`${PG.BOARD}/list`);
  };

  const onDeleted = () => {
    dispatch(deleteBoard(props.params.id));
    alert("삭제되었습니다.");
    router.push(`${PG.BOARD}/list`);
  };

  useEffect(() => {
    dispatch(findBoardById(props.params.id));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <div className="flex flex-col justify-start items-center w-[200px]">
          <div className="justify-center items-center">
            <span>ID</span>
            <TextField
              defaultValue={board.id}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, id: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>게시판 이름</span>
            <TextField
              defaultValue={board.boardName}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, boardName: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>게시판 타입</span>
            <TextField
              defaultValue={board.boardType}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, boardType: e.target.value })
              }
            />
          </div>

          <div className="flex gap-2 justify-center items-center">
            <Button onClick={onModified}>수정하기</Button>
            <Button onClick={onDeleted}>삭제하기</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdPage;
