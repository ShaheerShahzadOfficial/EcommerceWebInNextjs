"use client";
import Link from "next/link";
import { useState } from "react";
import "@/styles/auth.css";

export default function Login() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="bg-form-bg bg-no-repeat bg-cover h-screen w-screen items-center justify-center flex">
      <div className="h-fit bg-white w-[90%] lg:w-[30rem] rounded-xl flex flex-col items-center ">
        <div className="p-4 w-full flex flex-col items-center justify-around">
          <div className="mt-10">
            <span className="text-gray-700 font-extrabold text-3xl text-center">
              Register Your Account
            </span>
          </div>

          <div className="w-[80%] mt-10">
            <input
              type="text"
              placeholder="Name"
              className="auth-input"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
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

          <div className="w-[80%] mt-10">
            <input
              type="password"
              placeholder="Confirm Password"
              className="auth-input"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="w-[80%] mt-10 flex flex-col items-center justify-around ">
            <button className="text-lg font-bold w-full rounded-full p-3 text-white bg-black">
              Register
            </button>
          </div>

          <div className="w-[80%] mt-10 flex flex-col items-center">
            <span>Already have an account </span>
            <span className="my-4">
              <Link href={"/login"}>Login</Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
