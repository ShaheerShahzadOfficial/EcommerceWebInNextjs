"use client";
import Link from "next/link";
import { useState } from "react";
import "@/styles/auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="bg-form-bg bg-no-repeat bg-cover h-screen w-screen items-center justify-center flex">
      <div className="h-fit bg-white w-[90%] lg:w-[30rem] rounded-xl md:w-64 flex flex-col items-center ">
        <div className="p-4 w-full flex flex-col items-center justify-around">
          <div className="mt-10">
            <span className="text-gray-700 font-extrabold text-3xl text-center">
              Login
            </span>
          </div>

          <div className="w-[80%] mt-10">
            <input
              type="email"
              placeholder="Email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-[80%] mt-10">
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            className="w-[80%] mt-6 items-end flex text-left justify-end"
            href={"/"}
          >
            Forgot password?
          </Link>

          <div className="w-[80%] mt-10 flex flex-col items-center justify-around ">
            <button className="text-lg font-bold w-full rounded-sm p-3 text-white bg-gradient-to-r from-green-400 to-cyan-600 hover:from-cyan-600 hover:to-green-400">
              LOGIN
            </button>
          </div>

          <div className="w-[80%] mt-10 flex flex-col items-center">
            <span>Don't have an account </span>
            <span className="my-4">
              <Link href={"/register"}>Register</Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
