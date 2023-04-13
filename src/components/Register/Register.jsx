import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };
  const handleEmail = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    // console.log(event.target.value);
  };

  return (
    <div className="px-14 mt-14">
      <h2 className="text-center text-2xl w-1/3 bg-orange-400 mx-auto text-purple-700 font-bold p-4">
        Register
      </h2>
      <form
        onSubmit={handleFormSubmit}
        className="bg-orange-300 w-1/3 mx-auto flex flex-col gap-4 p-5 rounded-lg mt-4"
      >
        <input
          onChange={handleEmail}
          type="email"
          className="p-4 rounded-lg"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          className="p-4 rounded-lg"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <button className="btn btn-secondary">Register</button>
      </form>
    </div>
  );
};

export default Register;
