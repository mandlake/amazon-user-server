"use client";

import {
  deleteArticle,
  findArticleById,
  modifiedArticle,
} from "@/app/components/article/service/article.service";
import { getArticleById } from "@/app/components/article/service/article.slice";
import { PG } from "@/redux/common/enums/PG";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const IdPage = (props: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const article = useSelector(getArticleById);
  const [modified, setModified] = useState({
    id: article.id,
    title: article.title,
    content: article.content,
  });

  const onModified = () => {
    dispatch(
      modifiedArticle({
        ...article,
        title: modified.title || article.title,
        content: modified.content || article.content,
      })
    );
    alert("수정이 완료되었습니다.");
    router.push(`${PG.ARTICLE}/list`);
  };

  const onDeleted = () => {
    dispatch(deleteArticle(props.params.id));
    alert("삭제되었습니다.");
    router.push(`${PG.USER}/list`);
  };

  useEffect(() => {
    dispatch(findArticleById(props.params.id));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-start items-center w-screen mt-10">
        <div className="flex flex-col justify-start items-center w-[200px]">
          <div className="justify-center items-center">
            <span>ID</span>
            <TextField
              defaultValue={article.id}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, id: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center w-200">
            <span>게시판 제목</span>
            <TextField
              defaultValue={article.title}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, title: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>게시판 내용</span>
            <TextField
              defaultValue={article.content}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, content: e.target.value })
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
