import { r } from "../../assets";
import "./Welcome.scss";
import Wcafrd from "../Wcard/Wcafrd";
import { obj } from "../../Constants/data.type";
import { useContext } from "react";
import { BackgroundContext } from "../Context";
import LightToggle from "../../Layouts/LightToggle/LightToggle";

function Welcome(props: { ls: obj[]; svg: string; link_to?: string }) {
  // Background context 
  const { background } = useContext(BackgroundContext);
  // props tracking and collection
  const { ls, svg, link_to } = props;

  return (
    <LightToggle>
      <div className="welcome__container__ flex justify-center items-center py-8 h-full">
        <div className="h-full flex flex-col justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={r} alt="r.png" />
            <h1
              style={{ color: `${background == "white" ? "#000060" : "#fff"}` }}
            >
              Welcome to <br />
              Readiily
            </h1>
            <h6>Graphics Made Easy</h6>
          </div>
          <div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <>{svg}</>
                <h1
                  className="mt-3 icon__txt"
                  style={{
                    color: `${background == "white" ? "#000060" : "#fff"}`,
                  }}
                >
                  Examples
                </h1>
              </div>
            </div>
            {/* List container */}
            <div className="flex flex-col gap-8 mt-8">
              {ls.map((out) => (
                <Wcafrd key={out.id} text={out.text} />
              ))}
            </div>
          </div>
          <div className="next__btn">
            <Wcafrd type="btn" text="Next" link_to={link_to} />
          </div>
        </div>
      </div>
    </LightToggle>
  );
}

export default Welcome;
