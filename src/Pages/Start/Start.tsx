import { readily, readily_light } from "../../assets/index";
import "animate.css";
import "./Start.scss";
import { useContext } from "react";
import { BackgroundContext } from "../../Components/Context";

function Start() {
  // Background context
  const { background } = useContext(BackgroundContext);

  return (
    <div className="animate__animated animate__slideOutLeft animate__delay-2s starter__page flex justify-center items-center h-full w-full">
      {background == "white" ? (
        <img src={readily_light} alt="logo.jpg" />
      ) : (
        <img src={readily} alt="logo.jpg" />
      )}
    </div>
  );
}

export default Start;
