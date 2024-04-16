"use client";

import LoginPage from "./pages/users/login/page";

const Home = () => {
  return (
    <>
      <div className="text-blue-400 flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-[28px] mb-10">
          Welcome To React World !!!
        </h1>
        <LoginPage />
      </div>
    </>
  );
};

export default Home;
