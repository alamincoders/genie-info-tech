import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <section className="flex justify-around w-[500px] mt-5 mx-auto bg-blue-gray-300">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/cloud">Cloud Request</Link>
      <Link to="/filter">Filter Management</Link>
    </section>
  );
};

export default MainHeader;
