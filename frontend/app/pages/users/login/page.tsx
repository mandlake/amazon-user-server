"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PG } from "@/app/components/common/enums/PG";
import { NextPage } from "next";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { existsUsernameMessage } from "@/app/components/user/service/user.slice";
import {
  existsUsername,
  loginId,
} from "@/app/components/user/service/user.service";
import { setCookie } from "nookies";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState({} as IUser);
  const message = useSelector(existsUsernameMessage);
  const [isWrongId, setIsWrongId] = useState(true);
  const [isWrongPw, setIsWrongPw] = useState(true);
  const [isNoneId, setIsNoneId] = useState(false);
  const [enter, setEnter] = useState({
    id: false,
    pw: false,
    none: false,
  });

  const handleId = (e: any) => {
    const ID_CHECK = /^[a-z]{1,4}[a-z0-9]{5,19}$/; // 영어 소문자로 시작하는 6 ~ 20 자의 영어 소문자 또는 숫자

    if (ID_CHECK.test(e.target.value)) {
      console.log("정확한 아이디입니다.");
      setIsWrongId(false);
    } else {
      console.log(
        "잘못된 형식의 아이디입니다. 영어 소문자로 시작하는 6 ~ 20 자의 영어 소문자 또는 숫자로 입력해주세요."
      );
      setIsWrongId(true);
    }
    setEnter({ ...enter, id: true, none: false });

    setUser({ ...user, username: e.target.value });
  };
  const handlePw = (e: any) => {
    const PW_CHECK = /^[a-z]{1,2}[a-zA-Z0-9\D]{3,19}$/g; // 영어 소문자로 시작하는 4 ~ 20자의 글자(모두 허용)

    if (PW_CHECK.test(e.target.value)) {
      console.log("정확한 비밀번호입니다.");
      setIsWrongPw(false);
    } else {
      console.log(
        "잘못된 비밀번호입니다. 영어 소문자로 시작하는 4 ~ 20자의 글자로 입력해주세요."
      );
      setIsWrongPw(true);
    }
    setEnter({ ...enter, pw: true });

    setUser({ ...user, password: e.target.value });
  };

  const handleSubmit = () => {
    console.log(typeof user.username);
    setEnter({ ...enter, none: true });
    dispatch(existsUsername(user.username))
      .then((res: any) => {
        if (res.payload.message == "True") {
          dispatch(loginId(user)).then((res: any) => {
            if (res.payload.message == "True") {
              console.log(res.payload.accessToken);
              setCookie({}, "message", res.payload.message, {
                httpOnly: false,
                path: "/",
              });
              setCookie({}, "accessToken", res.payload.accessToken, {
                httpOnly: false,
                path: "/",
              });
              router.push(`${PG.BOARD}/list`);
            } else {
              console.log("로그인에 실패했습니다.");

              if (passwordRef.current) {
                passwordRef.current.value = "";
              }
              if (idRef.current) {
                idRef.current.value = "";
              }
            }
          });
        } else {
          console.log("아이디가 존재하지 않습니다. 회원가입을 진행해주세요.");
        }
      })
      .catch((err: any) => {
        console.log("err :");
        console.log(err);

        if (passwordRef.current) {
          passwordRef.current.value = "";
        }
        if (idRef.current) {
          idRef.current.value = "";
        }
      })
      .finally(() => {
        console.log("최종 로직");
      });
  };

  useEffect(() => {
    setIsNoneId(message === "True" ? false : true);
  }, [message]);

  useEffect(() => {
    setIsNoneId(false);
    setEnter({ id: false, pw: false, none: false });
  }, []);

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
              ref={idRef}
              id="username"
              type="text"
              onChange={handleId}
              placeholder="Username"
            />
          </div>
          {enter.id ? (
            isWrongId ? (
              <pre>
                <p className="text-red-500">
                  잘못된 형식의 아이디입니다. 영어 소문자로 시작하는 6 ~ 20 자의
                  영어 소문자 또는 숫자로 입력해주세요.
                </p>
              </pre>
            ) : (
              <pre>
                <p className="text-blue-500">정확한 형식의 아이디입니다.</p>
              </pre>
            )
          ) : (
            <pre>
              <p className="text-red-500">아이디를 입력해주세요.</p>
            </pre>
          )}
          {enter.none &&
            (isNoneId ? (
              <pre>
                <p className="text-red-500">
                  해당하는 아이디가 없습니다. 회원가입을 진행해주세요.
                </p>
              </pre>
            ) : (
              <pre>
                <p className="text-blue-500">해당하는 아이디가 존재합니다.</p>
              </pre>
            ))}

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              ref={passwordRef}
              id="password"
              type="password"
              onChange={handlePw}
              placeholder="******************"
            />
          </div>
          {enter.pw ? (
            isWrongPw ? (
              <pre>
                <p className="text-red-500">
                  잘못된 비밀번호입니다. 영어 소문자로 시작하는 4 ~ 20자의
                  글자로 입력해주세요.
                </p>
              </pre>
            ) : (
              <pre>
                <p className="text-blue-500">제대로된 비밀번호입니다.</p>
              </pre>
            )
          ) : (
            <pre>
              <p className="text-red-500">비밀번호를 입력해주세요.</p>
            </pre>
          )}
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
