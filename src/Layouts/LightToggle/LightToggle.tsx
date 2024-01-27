import { ReactElement, useContext, useState } from "react";
import { BackgroundContext } from "../../Components/Context";
import "./LightToggle.scss";

function LightToggle(props: {children: ReactElement}) {
  // UseContext BackgroundContext
  const { background, setBackground } = useContext(BackgroundContext);
  // State for managing background changing
  const [x, setX] = useState(false);
  x == true ? setBackground("white") : setBackground("black");

  return (
    <div className="__light__background__toggler h-full">
      <div
        onClick={() => setX((prev) => !prev)}
        className={`cursor-pointer __toggler __light ${
          background == "white" ? "__app__white__conversation" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clip-path="url(#clip0_650_1392)">
            <path
              d="M10.0002 14.1667C12.3013 14.1667 14.1668 12.3012 14.1668 10C14.1668 7.69882 12.3013 5.83334 10.0002 5.83334C7.69898 5.83334 5.8335 7.69882 5.8335 10C5.8335 12.3012 7.69898 14.1667 10.0002 14.1667Z"
              stroke={`${background == "white" ? "white" : "white"}`}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 0.833344V2.50001"
              stroke={`${background == "white" ? "white" : "white"}`}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 17.5V19.1667"
              stroke={`${background == "white" ? "white" : "white"}`}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5166 3.51666L4.69993 4.7"
              stroke={`${background == "white" ? "white" : "white"}`}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.2998 15.3L16.4831 16.4833"
              stroke={`${background == "white" ? "white" : "white"}`}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M0.833496 10H2.50016"
              stroke={`${background == "white" ? "white" : "white"}`}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 10H19.1667"
              stroke={`${background == "white" ? "white" : "white"}`}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5166 16.4833L4.69993 15.3"
              stroke={`${background == "white" ? "white" : "white"}`}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.2998 4.7L16.4831 3.51666"
              stroke={`${background == "white" ? "white" : "white"}`}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_650_1392">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {props.children}
    </div>
  );
}

export default LightToggle