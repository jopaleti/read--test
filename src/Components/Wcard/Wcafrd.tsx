import "./Wcard.scss";
import { useNavigate } from "react-router-dom";

function Wcafrd(props: { type?: string; text: string; link_to?: string }) {
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
          <div className="list-txt">
            <h3 className="text-center">{text}</h3>
          </div>
        </button>
      ) : (
        <div className="list-txt">
          <h3 className="text-center">{text}</h3>
        </div>
      )}
    </div>
  );
}

export default Wcafrd;
