"use client";

import {
  deleteBoard,
  findBoardById,
  modifiedBoard,
} from "@/app/components/board/service/board.service";
import { getSingleBoard } from "@/app/components/board/service/board.slice";
import { PG } from "@/app/components/common/enums/PG";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const IdPage = (props: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const board = useSelector(getSingleBoard);
  const [modified, setModified] = useState({
    id: board.id,
    title: board.title,
    description: board.description,
  });

  const onModified = () => {
    dispatch(
      modifiedBoard({
        ...board,
        title: modified.title || board.title,
        description: modified.description || board.description,
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
    console.log(props.params.id);
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
              defaultValue={board.title}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, title: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>게시판 타입</span>
            <TextField
              defaultValue={board.description}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, description: e.target.value })
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
