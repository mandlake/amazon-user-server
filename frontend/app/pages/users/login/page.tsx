"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PG } from "@/redux/common/enums/PG";
import { NextPage } from "next";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getLoginId } from "@/app/components/user/service/user.slice";
import { loginId } from "@/app/components/user/service/user.service";
import { parseCookies, setCookie } from "nookies";

const LoginPage: NextPage = () => {
  const loginMessage = useSelector(getLoginId);
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState({} as IUser);

  const handleSubmit = () => {
    dispatch(loginId(user));
  };

  useEffect(() => {
    if (loginMessage !== undefined) {
      if (loginMessage.message === "True") {
        setCookie({}, "message", loginMessage.message, {
          httpOnly: false,
          path: "/",
        });
        setCookie({}, "token", loginMessage.token, {
          httpOnly: false,
          path: "/",
        });
        console.log(parseCookies().message);
        console.log(parseCookies().token);
        router.push(`${PG.ARTICLE}/list`);
      }
    }
  }, [handleSubmit]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screan max-w-s mt-5">
        <form className="flex flex-col justify-start items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-[28px] text-black">로그인</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              아이디
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              onChange={(e: any) =>
                setUser({ ...user, username: e.target.value })
              }
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              onChange={(e: any) =>
                setUser({ ...user, password: e.target.value })
              }
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}
              type="button"
            >
              로그인
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href={`${PG.USER}/join`}
            >
              Join In ?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
