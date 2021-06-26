import React from "react";
import logo from "../assets/logo.png";

const Home = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const imgStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  };

  return (
    <div>
      <h1 style={style}>StandUp</h1>
      <img src={logo} alt="logo" style={imgStyle}></img>
    </div>
  );
};

export default Home;
