import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (!user.emailVerified) {
          alert("your email is not verified");
        }
        console.log(user);
        setSuccess("Login success");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="px-14 mt-14">
      <h2 className="text-center text-2xl w-1/3 bg-orange-400 mx-auto text-purple-700 font-bold p-4">
        Login
      </h2>
      <form
        onSubmit={handleLogin}
        className="bg-orange-300 w-1/3 mx-auto flex flex-col gap-4 p-5 rounded-lg mt-4"
      >
        <input
          type="email"
          className="p-4 rounded-lg"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <input
          type="password"
          className="p-4 rounded-lg"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <button className="btn btn-secondary">Login</button>
        <Link to="/register">
          <button className="btn btn-success text-white">Register</button>
        </Link>
        <p>{success}</p>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default Login;
