"use client";

import { saveArticle } from "@/app/components/article/service/article.service";
import { findAllBoards } from "@/app/components/board/service/board.service";
import { PG } from "@/app/components/common/enums/PG";
import { MyTypography } from "@/app/components/common/style/cell";
import { AttachFile, FmdGood, ThumbUpAlt } from "@mui/icons-material";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function SaveArticle() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();
  const [options, setOptions] = useState([]);
  const handleCancel = () => {
    console.log("cancel");
  };
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(saveArticle(data))
      .then((res: any) => {
        console.log(res);
        if (res.data.message === "True") {
          router.push(`${PG.ARTICLE}/list/${data.board}`);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setValue("user", jwtDecode<any>(parseCookies().accessToken).userId);
    dispatch(findAllBoards(1)).then((res: any) => {
      setOptions(res.payload);
    });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-10/12">
        {MyTypography("게시글 작성", "1.5rem")}
        <div className="mx-auto w-10/12 max-w-2xl p-4">
          <label
            htmlFor="articles"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Article
          </label>
          <select
            id="articles"
            typeof="number"
            {...register("board", { required: true })}
            defaultValue={1}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {options.map((item: any) => (
              <option value={item.id} key={item.id} title={item.title}>
                {item.content}
              </option>
            ))}
          </select>
        </div>

        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            placeholder="Title"
            type="text"
            {...register("title", { required: true })}
          />
          <textarea
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            placeholder="Describe everything about this post here"
            {...register("content", { required: true })}
          ></textarea>
          <div className="icons flex text-gray-500 m-2">
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <ThumbUpAlt />
            </svg>
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <FmdGood />
            </svg>
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <AttachFile />
            </svg>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">
              0/300
            </div>
          </div>
          <div className="buttons flex">
            <button
              onClick={handleCancel}
              className="btn  overflow-hidden relative w-30 bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
    before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
            >
              Cancel
            </button>
            <input
              className="btn  overflow-hidden relative w-30 bg-blue-500 text-white p-3 px-8 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
    before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
              type="submit"
              value="SUBMIT"
            />
          </div>
        </div>
      </form>
    </>
  );
}
