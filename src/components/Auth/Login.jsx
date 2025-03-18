import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    //console.log("Email is : ", email);
    //console.log("Password is : ", password);
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex  h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="  outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-grey-300"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-4 placeholder:text-grey-300"
            type="password"
            placeholder="Enter your password"
          />
          <button className=" text-white outline-none border-none bg-emerald-600 rounded-full py-3 px-5 text-xl mt-5 placeholder:text-white">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
