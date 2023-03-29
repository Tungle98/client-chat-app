import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Form({ isSignInPage = true }) {
  const [data, setData] = useState({
    ...Button(!isSignInPage && { fullName: "" }),
    email: "",
    password: "",
  });

  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold">
        Welcome {isSignInPage && "Back"}
      </div>
      <div className="text-xl font-bold mb-14">
        {isSignInPage ? "Sign in to get explored" : "Sign up to get started"}
      </div>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={() => console.log("")}
      >
        {!isSignInPage && (
          <Input
            label="Full name"
            name="name"
            placeholder="Enter your name"
            className="mb-6"
            value={data.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
          />
        )}
        <Input
          label="Email address"
          name="email"
          placeholder="Enter your email"
          className="mb-6"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          label="Password"
          name="password"
          placeholder="Enter your password"
          className="mb-14"
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
        <span className="cursor-pointer text-primary underline">
          {isSignInPage ? "Sign up" : "Sign in"}
        </span>
      </div>
    </div>
  );
}
