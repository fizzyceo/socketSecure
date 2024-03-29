import React, { useState } from "react";
import reactsvg from "../assets/react.svg";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  
  return (
    <div className="flex justify-center flex-col gap-6 items-center bg-slate-600 h-screen ">
      <div className=" flex flex-col bg-slate-800 items-center w-[500px] gap-10 p-5 rounded-md relative">
        <img
          src={reactsvg}
          alt=""
          className="absolute -top-6 p-2 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 "
        />
        <form
          className=" mx-auto flex justify-center mt-10 gap-6 w-full flex-col"
          action=""
        >
          <div className="flex flex-row items-center justify-center gap-3">
            <input
              type="email"
              placeholder="email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full block px-5 py-3  outline-none  rounded-full ring-3 focus:ring-4  ring-slate-400 focus:ring-blue-700 focus:shadow-md focus:shadow-blue-700"
            />
            <input
              type="password"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name..."
              className="w-full px-5 py-3 outline-none rounded-full ring-3 focus:ring-4 ring-slate-400 focus:ring-blue-700 focus:shadow-md focus:shadow-blue-600"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <input
              type="text"
              placeholder="username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full block px-5 py-3  outline-none  rounded-full ring-3 focus:ring-4  ring-slate-400 focus:ring-blue-700 focus:shadow-md focus:shadow-blue-700"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password..."
              className="w-full px-5 py-3 outline-none rounded-full ring-3 focus:ring-4 ring-slate-400 focus:ring-blue-700 focus:shadow-md focus:shadow-blue-600"
            />
          </div>
          <button className="border-0 text-xl bg-blue-600 text-white rounded-full p-4">
            Login
          </button>
        </form>
        <p className="text-white">
          Already have an account?{" "}
          <a className="italic text-blue-400 no-underline" href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
