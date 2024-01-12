import { readily } from "../../assets/index";
import "animate.css";
import "./Start.scss";
// import readily from "../../assets/readily.jpg";

function Start() {
  return (
    <div className="animate__animated animate__slideOutLeft animate__delay-2s starter__page bg-black flex justify-center items-center h-lvh w-full">
      <img src={readily} alt="logo.jpg" />
    </div>
  );
}

export default Start;
