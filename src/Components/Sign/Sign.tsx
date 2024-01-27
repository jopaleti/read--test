import { readily, readily_light } from "../../assets";
import "./Sign.scss";
import { useContext } from "react";
import { BackgroundContext } from "../Context";

function Sign() {
  // Background context
  const { background } = useContext(BackgroundContext);

  return (
    <>
      <div className="sign__ flex justify-center flex-col gap-6">
        {background == "white" ? (
          <img src={readily_light} alt="logo.jpg" />
        ) : (
          <img src={readily} alt="logo.jpg" />
        )}
        {/* <hr className="__hr" /> */}
        <h1
          className="h__"
          style={{ color: `${background == "white" ? "#000060" : "#fff"}` }}
        >
          Sign up for Readiily
        </h1>
      </div>
    </>
  );
}

export default Sign