import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-purple-500 px-14 py-2 flex justify-center gap-4 text-2xl text-white">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Header;
