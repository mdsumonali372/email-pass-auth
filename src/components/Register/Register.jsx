import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.config";

const Register = () => {
  const [regiError, setRegiError] = useState("");
  const [success, setSuccess] = useState("");
  const handleFormSubmit = (event) => {
    // 1 prevent page refresh stop after submit
    event.preventDefault();
    setSuccess("");
    // 2 collect form data
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!/(?=.*[A-Z])/.test(password)) {
      setRegiError("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setRegiError("Please add at least two number");
      return;
    } else if (password.length < 6) {
      setRegiError("Please add at least 6 character length");
      return;
    }
    console.log(email, password);
    // create new user
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setRegiError("");
        event.target.reset();
        setSuccess("Create SuccessFully");
      })
      .catch((error) => {
        setRegiError(error.message);
      });
  };
  const handleEmail = (event) => {
    // console.log(event.target.value);
    // setEmail(event.target.value);
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
          required
        />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          className="p-4 rounded-lg"
          name="password"
          id="password"
          placeholder="Your Password"
          required
        />
        <p className="text-red-600">{regiError}</p>
        <p className="text-purple-600">{success}</p>
        <button className="btn btn-secondary">Register</button>
      </form>
    </div>
  );
};

export default Register;
