import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { json, useNavigate } from "react-router-dom";

export default function Form({ isSignInPage = true }) {
  const [data, setData] = useState({
    ...(!isSignInPage && { fullName: "" }),
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:8000/api/${isSignInPage ? "login" : "register"}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (res.status === 400) {
      console.log("co loi xay ra");
    } else {
      const resData = await res.json();
      if (resData.token) {
        localStorage.setItem("user:token", resData.token);
        localStorage.setItem("user:detail", JSON.stringify(resData.user));
        navigate("/");
      } 
    }
  };
  const navigate = useNavigate();
  return (
    <div className="bg-[#e1edff] h-screen flex justify-center items-center">
      <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold">
          Welcome {isSignInPage && "Back"}
        </div>
        <div className="text-xl font-bold mb-14">
          {isSignInPage ? "Sign in to get explored" : "Sign up to get started"}
        </div>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          {!isSignInPage && (
            <Input
              label="Full name"
              name="name"
              placeholder="Enter your name"
              className="mb-6 w-[50%]"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            label="Email address"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="mb-6 w-[50%]"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="mb-14 w-[50%]"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            label={isSignInPage ? "Sign In" : "Sign Up"}
            className="w-1/2 mb-6"
            type="submit"
          />
        </form>
        <div>
          {isSignInPage
            ? "Did'nt have an account? "
            : " Already have an account? "}
          <span
            className="cursor-pointer text-primary underline"
            onClick={() =>
              navigate(`/users/${isSignInPage ? "sign_up" : "sign_in"}`)
            }
          >
            {isSignInPage ? "Sign up" : "Sign in"}
          </span>
        </div>
      </div>
    </div>
  );
}
