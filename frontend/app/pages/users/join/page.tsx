"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PG } from "@/redux/common/enums/PG";
import { NextPage } from "next";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { joinId } from "@/app/components/user/service/user.service";

const JoinPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [join, setJoin] = useState({} as IUser);

  const handleSubmit = () => {
    dispatch(joinId({ join }));
    router.push(`${PG.USER}/login`);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screan max-w-s mt-5">
        <form className="flex flex-col justify-start items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-[28px] mb-1">Sign up</h2>
          <p className="text-xs italic mb-3 text-gray-500">
            Please fill in this form to create an account.
          </p>
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
                setJoin({ ...join, username: e.target.value })
              }
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              비밀 번호
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              onChange={(e: any) =>
                setJoin({ ...join, password: e.target.value })
              }
              placeholder="******************"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              이름
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              onChange={(e: any) => setJoin({ ...join, name: e.target.value })}
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              전화번호
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              onChange={(e: any) =>
                setJoin({ ...join, phoneNumber: e.target.value })
              }
              placeholder="Phone"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              주소
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              onChange={(e: any) =>
                setJoin({ ...join, address: e.target.value })
              }
              placeholder="Address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="job"
            >
              직업
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="job"
              type="text"
              onChange={(e: any) => setJoin({ ...join, job: e.target.value })}
              placeholder="Job"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              회원가입
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mb-3"
              href={`${PG.USER}/login`}
            >
              Already Joined?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default JoinPage;
