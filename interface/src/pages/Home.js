import React from "react";
import Navbar from "../components/Navbar";

const Home = (props) => {
    const {loginStatus, loginCbHandler} = props
  return (
    <>
      <Navbar
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
      ></Navbar>
      <h1>HomePage</h1>
      <p>Login Status: {JSON.stringify(loginStatus)}</p>
    </>
  );
};

export default Home;
