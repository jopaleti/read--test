import "./Wcard.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BackgroundContext } from "../Context";

function Wcafrd(props: { type?: string; text: string; link_to?: string }) {
  // Background context
  const { background } = useContext(BackgroundContext);
  const { type, text, link_to } = props;
  const navigate = useNavigate();

  return (
    <div>
      {type === "btn" ? (
        <button
          onClick={() => {
            navigate(link_to || "");
          }}
        >
          <div
            className="list-txt"
            style={{ background: `${background == "white" ? "#000060" : "rgba(255, 255, 255, 0.08)"}` }}
          >
            <h3 className="text-center">{text}</h3>
          </div>
        </button>
      ) : (
        <div className="list-txt">
          <h3
            className="text-center"
            style={{ color: `${background == "white" ? "#000060" : "#fff"}` }}
          >
            {text}
          </h3>
        </div>
      )}
    </div>
  );
}

export default Wcafrd;
