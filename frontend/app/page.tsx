"use client";

import { parseCookies } from "nookies";
import LoginPage from "./pages/users/login/page";

function Home() {
  const showHeader = parseCookies().message === "True";
  return (
    <>
      <div className="text-blue-400 flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-[28px] mb-10">
          Welcome To React World !!!
        </h1>
        {showHeader ? <p>로그인을 환영합니다 !!!</p> : <LoginPage />}
      </div>
    </>
  );
}

export default Home;
